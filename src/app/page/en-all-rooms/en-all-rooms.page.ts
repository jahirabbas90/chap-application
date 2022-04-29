import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MyConnecterService } from '../../services/my-connecter.service';
import { Platform, AlertController } from '@ionic/angular';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';



@Component({
  selector: 'app-en-all-rooms',
  templateUrl: './en-all-rooms.page.html',
  styleUrls: ['./en-all-rooms.page.scss'],
})
export class EnAllRoomsPage implements OnInit {

  _authUsr: any;
  _allRoom: any;
  _filteredRoom:any;
  _userNickName:any;
  _userid:any;
  allChatUser:any;
  userListBackup :any;
  allGroups:any;
  _allUsr = [];
  _visibleNameArray :any;
  _visibleUsr = [];
  groupsListBackup:any;
  chatIdArray=[];
  coversationList=[];
  message_count: number=0;

  constructor(private router: Router,
    private _connecter: MyConnecterService,
    private alertCtrl: AlertController,
    private firestore:AngularFirestore,
    private platform:Platform,
    private _location: Location,
    private fcm: FCM 
    ) {
      this.platform.ready()
      .then(() => {
        this.fcm.onNotification().subscribe(data => {
          if (data.wasTapped) {
            console.log("Received in background");
            // alert("Received in background");
          } else {
            console.log("Received in foreground");
            var bleep = new Audio();
            bleep.src = './assets/chatTone.mp3';
            bleep.play();
            // alert("Received in foreground");
          };
        });
  
        this.fcm.onTokenRefresh().subscribe(token => {
          // alert("refresh_token :"+token);  
        });
      })

    _connecter.authUser$.subscribe(data => {
      this._authUsr = data;
      this._userNickName=this._authUsr.name;
      this._userid=this._authUsr.id;
      //check if user FCMToken register on not

      if(Object.keys(this._authUsr).length === 0) {
        this.router.navigate(['/en-login']);
      }
      else{
        // this.getAllChat();
      }
    });

    if (this._authUsr.fcm_token == null) {
      console.warn("null")
      console.warn(""+this._authUsr.fcm_token)
      this._connecter.updateUserFcmToken(localStorage.getItem("user_id"),""+localStorage.getItem("user_fcm_token"));
    } else if (this._authUsr.fcm_token!=null && this._authUsr.fcm_token!=localStorage.getItem("user_fcm_token")) {
      console.warn("not_null")
      this._connecter.updateUserFcmToken(localStorage.getItem("user_id"),localStorage.getItem("user_fcm_token"));
    }

  }

  ngOnInit() {

    this.getAllPosts().subscribe((data) => {
      if (data.length>0) { 
        // console.log(data);

        this._allRoom=data;
        this._filteredRoom = data.filter(eachVal => {
          let opt = eachVal.visible_name.some((
            { uid }) => uid == this._authUsr.id);
          return opt;
        })

        // console.warn("myData :" + JSON.stringify(this._filteredRoom))
        this._allRoom=this._filteredRoom;

        if (this._allRoom!=undefined) {
          this._visibleNameArray=[];

          for (let index = 0; index < this._allRoom.length; index++) {
            const visibleArray = this._allRoom[index].visible_name;
            this._visibleNameArray.push(visibleArray);
          }
          // console.warn("visibleName  :" + JSON.stringify(this._visibleNameArray))

           for (let index = 0; index < this._visibleNameArray.length; index++) {
              const element = this._visibleNameArray[index];
              if (element.uid===this._userid) {
                this.message_count=element.unread;
              }
            }
        }
        
        
        // this.coversationList=data;
        /* for (let index = 0; index < data.length; index++) {
          this.coversationList.push(data[index]['visible_name']);
        } */

        /* for (let index = 0; index < this.coversationList.length; index++) {
          const element = this.coversationList[index];
          console.log("visible_user_array_index :" + JSON.stringify(element));              
        } */

        /* console.log("userId :" + this._authUsr.id);
        console.log(this.coversationList);
        for (let index = 0; index < this.coversationList.length; index++) {
          const element1 = this.coversationList[index];
          console.log("visible_user_array :" + JSON.stringify(element1));
          console.log("userId :" + this._authUsr.id);
        } */
      }
    });

    
   
  }


  /* getAllChat() {    
    this._allRoom = this._connecter.getGroups(this._authUsr.id);
  } */

  getAllPosts(): Observable<any> {
    return this.firestore.collection<any>("conversations", ref => ref
      .orderBy('ceatedAt', 'desc')).valueChanges({ idField: 'id' });
  }
  
  signOut() {
    this._connecter.removeAuth();
  }

  async filterList(evt) {
    const searchTerm = evt.srcElement.value;
    // console.log(this._allRoom)
    console.log(searchTerm)

    if (!searchTerm) {
      this._filteredRoom=this._allRoom;
      return;
    }

    this._filteredRoom = this._allRoom.filter(eachVal => {
      let opt = eachVal.visible_name.some((
        { name }) => name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      return opt;
    })
    /* this.userListBackup = this.allGroups.filter(item => {
      return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    }); */

  }

  doRefresh(event) {
    console.log('Begin async operation');
    // this.getAllChat();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  getAllUser(value, array) {
    for (let index = 0; index < array.length; index++) {
      this.userListBackup = this.userListBackup.push(value)

    }

    this.allGroups = this.userListBackup;
  }

  /* getAllChatUser(value){
    this.allChatUser=this.allChatUser.push(value);
  } */

  async showPop(groupName,groupFriends) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: '' + groupName,
      message: '' + groupFriends
      
    });

    await alert.present();

  }

  initializeApp() {
    this.platform.ready().then(() => {
    });

    this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
      console.log('Back press handler!');
      if (this._location.isCurrentPathEqualTo('/en-all-rooms')) {

        // Show Exit Alert!
        console.log('Show Exit Alert!');
        this.showExitConfirm();
        processNextHandler();
      } else {

        // Navigate to back page
        console.log('Navigate to back page');
        this._location.back();

      }

    });

    this.platform.backButton.subscribeWithPriority(5, () => {
      console.log('Handler called to force close!');
      this.alertCtrl.getTop().then(r => {
        if (r) {
          navigator['app'].exitApp();
        }
      }).catch(e => {
        console.log(e);
      })
    });

  }


  showExitConfirm() {
    this.alertCtrl.create({
      header: 'Close App',
      message: 'Do you want to close the app?',
      backdropDismiss: false,
      buttons: [{
        text: 'Stay',
        role: 'cancel',
        handler: () => {
          console.log('Application exit prevented!');
        }
      }, {
        text: 'Exit',
        handler: () => {
          navigator['app'].exitApp();
        }
      }]
    })
      .then(alert => {
        alert.present();
      });
  }


}


import { Pipe, PipeTransform } from '@angular/core';  
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'; 
import { AngularFirestore } from '@angular/fire/firestore';
import { first, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NativeAudio } from '@ionic-native/native-audio';
@Pipe({  
  name: 'starPipe'  
})  
  
export class StarPipe implements PipeTransform {  
  constructor(private _sanitizer: DomSanitizer) { }  
  
  transform(value: any, event?: number): SafeHtml { 
    if(value) {    
      if(value.group) {
        return value.title;
      }
      else {
        var arr = [];
        if (value.visible_name) {
          var filteredArray = value.visible_name.filter(function(itm){
            return itm.uid == event;
          });

          if(filteredArray.length) {
            return filteredArray[0].name;
          } 
        }
        
        
      }
    }
    return null;
 
  }  
} 

@Pipe({  
  name: 'notificationPipe'  
})  
  
export class NotificationPipe implements PipeTransform {  
  constructor(private _sanitizer: DomSanitizer) { }  
  
  transform(value: any, event?: number, group?: any): SafeHtml { 
    if(value) { 
       
      if(group) {
        var filteredArray = value.filter(function(itm){
          return itm.uid == event;
        });
        
        if(filteredArray.length) {
          return filteredArray[0].unread > 0 ? filteredArray[0].unread : null;
        }
      }
      else {
        var arr = [];
        var filteredArray = value.filter(function(itm){
          return itm.uid != event;
        });
        if(filteredArray.length) {
          return filteredArray[0].unread > 0 ? filteredArray[0].unread : null;
        }
      }
    }
    return null;
 
  }  
} 
