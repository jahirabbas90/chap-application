import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { EnDataService } from '../../services/en-data.service';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Observable, of } from 'rxjs';


import { MyConnecterService } from '../../services/my-connecter.service';

@Component({
  selector: 'app-en-create-room',
  templateUrl: './en-create-room.page.html',
  styleUrls: ['./en-create-room.page.scss'],
})
export class EnCreateRoomPage implements OnInit {

  auth: any;
  users = [];
  userEmails = [];
  title = '';
  participant = '';
  groupChat = true;
  _currentUserId;
  _currentU;
  checkedUser = [];
  
  _authUsr: any;
  _allUsr= [];
  _visibleUsr= [];

  constructor(private chatService: EnDataService, private router: Router,
    private loadingController: LoadingController, private alertController: AlertController, 
    private _connecter: MyConnecterService) { 
      // this._currentUserId = chatService.currentUser.uid; 
      // this._currentU = chatService.currentUser; 
      // //console.log(this._currentUserId)
      // if(chatService.currentUser && 'uid' in chatService.currentUser) {
      //   this.addUser(this._currentU.email, 'own')
      // }
      // else {
      //   this.router.navigateByUrl('/en-login');
      // }

      // chatService.addedUser$.subscribe(data => {
      //   if(data) {
      //     this.checkedUser = data;
      //   }
      //   // console.log(data);
      // });

      _connecter.authUser$.subscribe(data => {
        this._authUsr = data;
        //console.log(this._authUsr)
        if(Object.keys(this._authUsr).length === 0) {
          this.router.navigate(['/en-login']);
        }
        else{
          this.getUsers();
        }
      });

      _connecter.allUser$.subscribe(data1 => {
        this._allUsr = data1; 
        this._visibleUsr = this._allUsr;   
      });

    }

  ngOnInit() { 
  }

  async addUser(x, y) {

    const loading = await this.loadingController.create();
    await loading.present();

    // let obs = this.chatService.findUser(this.participant);
    let obs = this.chatService.findUser(x);
    var self = this;
    forkJoin(obs).subscribe(res => {
      //console.log(res);
      for (let data of res) {
        if (data.length > 0) {

          var d: any = data[0].data;
          var cret: boolean = true;
          if(self._currentUserId == d.uid) {
            cret = false
            if(y == 'own') {
              this.auth = d
            }
          }

          // console.log(cret)
          // if(cret ) {
          //   if(!this.groupChat) {
          //     this.users = []
          //     this.userEmails = []
          //     this.users.push(data[0].data);
          //     this.userEmails.push(d.nickname);
          //   }
          //   else {
          //     var filteredArray = this.users.filter(function(itm){                
          //       return itm.uid == d.uid;
          //     });
          //     //console.log(filteredArray)
          //     if(filteredArray && filteredArray.length > 0) {
                
          //     }
          //     else {
          //       this.users.push(data[0].data);
          //       this.userEmails.push(d.nickname);
          //     }
          //   }
          // }

          //console.log(this.users)

        }
      }
      this.participant = '';
    });
    loading.dismiss();
  }

  async createGroup() {
    this.users.push(this.auth)
    // this.userEmails.push(this.auth.nickname)

    if(this.users.length < 1) {
      let alert = await this.alertController.create({
        header: 'Error',
        message: 'No user',
        buttons: ['OK']
      });
      await alert.present();
      return; 
    } 

    if(this.groupChat) {
      if(this.title == undefined || this.title.trim() == '') {
        let alert = await this.alertController.create({
          header: 'Error',
          message: 'Group name is required',
          buttons: ['OK']
        });
        await alert.present();
        return; 
      }
    }
    else {
      this.userEmails = [];
      // this.userEmails.push(this.auth.nickname);
      for (let index = 0; index < this.users.length; index++) {
        this.userEmails.push(this.users[index].nickname);   
      }
    }

    const loading = await this.loadingController.create();
    await loading.present(); 
    // console.log(this.userEmails)
    // return;
    this.chatService.createGroup(this.groupChat, this.title, this.users, this.userEmails).then(res => {
      this.router.navigateByUrl('/en-all-rooms');
    });
    loading.dismiss();
  }

  async filterList(evt) {
    const searchTerm = evt.srcElement.value;
    console.log(searchTerm)
    if (!searchTerm) {
      this._visibleUsr = this._allUsr;
      return;
    }

    this._visibleUsr = this._allUsr.filter(item => {      
      return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    });

  }

  updateSelected(indx) {
    if(this._allUsr[indx].checked == true) {
      this._allUsr[indx].checked = false;
    }
    else {
      this._allUsr[indx].checked = true;
    }
  }

  
  getUsers() {
    this._connecter.fetchUsers(this._authUsr.email);
  }

  createGroupChat() {

    var selected = this._allUsr.filter(t=>t.checked === true);
    console.log(selected);
    if(selected.length) {
      var _visible_name = [];
      var _usersA = [];
      _visible_name.push({
        uid: this._authUsr.id,
        name: this._authUsr.name,
        unread: 0,
        fcm_token:this._authUsr.fcm_token
      });
      _usersA.push(this._authUsr.id);
      for (let index = 0; index < selected.length; index++) {
        _visible_name.push({
          uid: selected[index].id,
          name: selected[index].name,
          unread: 0,
          fcm_token:selected[index].fcm_token
        });
        _usersA.push(selected[index].id);        
      }

      var ar = {
        message_count: 0,
        title: this.title.trim(),
        group: true,
        visible_name: _visible_name,
        last_message: null
      };
      this._connecter.createNewChatGroup(ar, _usersA);
    }
    else {
      this._connecter.presentToast('Please select user');
    }

  }

}
