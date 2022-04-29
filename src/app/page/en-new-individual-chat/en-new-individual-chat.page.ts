import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MyConnecterService } from '../../services/my-connecter.service';

@Component({
  selector: 'app-en-new-individual-chat',
  templateUrl: './en-new-individual-chat.page.html',
  styleUrls: ['./en-new-individual-chat.page.scss'],
})
export class EnNewIndividualChatPage implements OnInit {
  [x: string]: any;
  checkedUser = [];
  public userListBackup: any[];
  public userList: any[];
  chatListBackup: any[];
  allChats: any;
  userId:any;
  chats:any;
  
  
  _authUsr: any;
  _allUsr= [];
  _visibleUsr= [];

  constructor(
    private router: Router,
    private _connecter: MyConnecterService
    ) {
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


  viewNewGroup() {
    this.router.navigate(['/en-create-room']);
  }

  async filterList(evt) {
    const searchTerm = evt.srcElement.value;

    if (!searchTerm) {
      this._visibleUsr = this._allUsr;
      return;
    }

    this._visibleUsr = this._allUsr.filter(item => {      
      return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    });

  }

  

  signOut() {
    this._connecter.removeAuth();
  }

  getUsers() {
    this._connecter.fetchUsers(this._authUsr.email);
  }

  startNewChat(usr) {
    // routerLink='/single-user-chat/{{u.name}}'
    console.log(JSON.stringify(usr))
    if (this._authUsr.personal_chats) {
      let indx = usr.personal_chats.findIndex(item=>item.uid == this._authUsr.id);
    // console.log(indx);
    if(indx > -1) {
      console.log(JSON.stringify( usr.fcm_token))
      localStorage.setItem("ousr_fcm_token",""+usr.fcm_token);
      // alert(1)
      this.router.navigate(['/single-user-chat', usr.personal_chats[indx]['chat_id']]);
    }
    else {
      console.log(JSON.stringify( usr))

      var ar = {
        message_count: 0,
        title: null,
        group: false,
        visible_name: [
          {
            uid: this._authUsr.id,
            name: usr.name,
            unread: 0,
            fcm_token:usr.fcm_token
          },
          {
            uid: usr.id,
            name: this._authUsr.name,
            unread: 0,
            fcm_token:this._authUsr.fcm_token
          }
        ],
        last_message: null
      };
      var cAr1 = this._authUsr.personal_chats;
      var cAr2 = usr.personal_chats;
      // localStorage.setItem("other_fcm_token",""+usr.fcm_token);
      console.warn("OtherUser : "+JSON.stringify(usr.fcm_token));
      localStorage.setItem("ousr_fcm_token",""+usr.fcm_token);
      console.warn("OwnUser : "+JSON.stringify(this._authUsr.fcm_token));
      console.warn("ar  : "+JSON.stringify(ar));
      this._connecter.createNewChat(ar, this._authUsr.id, cAr1, usr.id, cAr2);
    }
    }
    
  }

}
