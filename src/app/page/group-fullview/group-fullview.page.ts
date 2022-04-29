import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { AngularFirestore, } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-group-fullview',
  templateUrl: './group-fullview.page.html',
  styleUrls: ['./group-fullview.page.scss'],
})
export class GroupFullviewPage implements OnInit {

  @Input() selected: any;
  @Input() all_user: any;
  group_name: any;
  _authUser: any;

  constructor(
    private _firestore: AngularFirestore,
    private router:Router,
    private route: ActivatedRoute,
    public modalController: ModalController,
    private _data: DataService
  ) {
    _data.authUser$.subscribe(data => {
      this._authUser = data;
      if(this._authUser != null) {
        
      }
      else {
        this.router.navigate(['/login']);
      }
      //console.log(this._authUser);
    })
  }
  
  ngOnInit() {
    //console.log(this.selected);
    //console.log(this.all_user);
  }
  
  // createGroup() {
  //   this.router.navigate(['/all-chat']);
  
  // }

  updateSelected(id, type) {
    if(type == 'userName') {
      var index = this.all_user.findIndex(x => x.data.username == id);
      if(index > -1) {
        if(this.all_user[index].data.checked) {
          this.all_user[index].data.checked = false;
          var index = this.selected.indexOf(this.all_user[index].data.username);
          if (index !== -1) {
            this.selected.splice(index, 1);
          }
        }
        else {
          this.all_user[index].data.checked = true;
          this.selected.push(this.all_user[index].data.username);
        }
      }
    }
  }

  async closeModal() {
    let data = { selected: this.selected, all_user: this.all_user  };
    await this.modalController.dismiss(data);
  }

  createGroup() {
    if(this.group_name && this.group_name.trim() && this.selected && this.selected.length) {

      var user = [this._authUser.user_id];
      var members = [
        {
          deleted: false,
          unread_count: 0,
          user_id : this._authUser.user_id,
          user_name: this._authUser.username
        }
      ];
      for (let index = 0; index < this.all_user.length; index++) {
        if(this.all_user[index].data.checked) {
          user.push(this.all_user[index].data.user_id);
          var m = {
            deleted: false,
            unread_count: 0,
            user_id : this.all_user[index].data.user_id,
            user_name: this.all_user[index].data.username
          };
          members.push(m);
        }      
      }
      console.log(user);
      this._firestore.collection<any>('chat_rooms', ref => ref.where('users', '==', user)).snapshotChanges()
      .pipe(
        map(actions => actions.map(a =>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data };
        }))
      ).subscribe(data => {
        if(data.length) {
          this._data.showSuccess('error', 'Same group already exsist');
          this.closeModal();
        } 
        else {
          this._data.addGroupChat(this._authUser, this.group_name, user, members);
          this.closeModal();
        }
      }); 
         
    }
    else {
      this._data.showSuccess('error', 'Something went wrong');
    }
    

  }

}
