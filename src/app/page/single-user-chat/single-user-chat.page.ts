import { Component, OnInit, ViewChild, ElementRef, NgZone, ViewChildren, QueryList } from '@angular/core';
import { IonContent, AlertController } from '@ionic/angular';
import { Observable, Subscription } from 'rxjs';
import { EnDataService } from '../../services/en-data.service';
import { ActivatedRoute, Router } from '@angular/router';
// import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { first, map } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';
import { AttachmentUploadPage } from '../attachment-upload/attachment-upload.page';
import firebase from 'firebase';
import { DatePipe } from '@angular/common';
import { AngularFirestore } from '@angular/fire/firestore';


import { MyConnecterService } from '../../services/my-connecter.service';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { ActionSheetController } from '@ionic/angular';
import { loadingController } from '@ionic/core';

@Component({
  selector: 'app-single-user-chat',
  templateUrl: './single-user-chat.page.html',
  styleUrls: ['./single-user-chat.page.scss'],
})

export class SingleUserChatPage implements OnInit {
  @ViewChildren("content") messageContainers: QueryList<ElementRef>;


  messages: Observable<any[]>;
  newMsg = '';
  chatTitle = '';
  chatLength:number=20;

  
  showMoreChat:boolean=true;
  _currentUser;
  myId;
  chat = null;
  _users = [];
  groupId: any
  _visible_name=[];
  userName: any;
  uid: any;
  o_uid: any;
  chats = [];
  chatListBackup:any[];
  allChats:any;
  
  _authUsr: any;
  _existingChat= [];
  _chatId: any;
  _userNickName: any;
  _userId: any;
  _msgByName: any;
  _mesageCount: number=0;
  _chatTitle: any;
  _oldChats = [];
  _currentChat: any;

  @ViewChild(IonContent, { static: false }) content: IonContent;
  @ViewChild('input', { read: ElementRef }) msgInput: ElementRef;

  private subscriptions = new Subscription();


  constructor(private route: ActivatedRoute, private chatService: EnDataService, private firestore: AngularFirestore,
    private router: Router, private alertCtrl: AlertController, public modalController: ModalController, public datepipe: DatePipe,
    private _connecter: MyConnecterService, public actionSheetController: ActionSheetController,
    public _zone: NgZone
) {

    _connecter.authUser$.subscribe(data => {
      this._authUsr = data;
      this._userNickName=this._authUsr.name;
      this._userId=this._authUsr.id;
      console.error("loggedinUserId :"+this._userId);
    });
    this.route.params.subscribe(data => {
      this._chatId = data.chatId;

      if(this._chatId) {
        this.fetchOldChat();
      }
    })
    _connecter.oldChats$.subscribe(data => {
      this._oldChats = data;
      // var milliseconds = today.getMilliseconds();
    });

    for (let index = 0; index < this._oldChats.length; index++) {
      const element = this._oldChats[index];
      const dateAppointment = new Date(element['createAt']);
      const currentDate = new Date();
      // console.log(`currentDate is `, currentDate.getTime() );
      // console.log(`OldDate is `, dateAppointment.getTime() );
      const diffTime = Math.abs(currentDate.getTime() - dateAppointment.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60*24)); 
      if (diffDays>7) {
        if (this._oldChats[this._oldChats.length - 1].mesage==element) {
          this._connecter.deleteMessage(this._chatId, element['id']);
          if (this._chatId) {
            this.fetchOldChat();
          }
          this._connecter.updateLastMessage(this._chatId, "");
        } else {
          this._connecter.deleteMessage(this._chatId, element['id']);
        }
      }
    }

    this.subscriptions.add(
      _connecter.currentChat$.subscribe(data => {
        this._currentChat = data;
  
        if (data && data.visible_name!=null) {
          // console.warn("currentChat",""+JSON.stringify(data.visible_name));
          console.warn("currentChat",""+JSON.stringify(data));
          
  
          if (data && data.visible_name!=null) {
            var newUserArray=data.visible_name;
    
            this._visible_name=[];
    
            if (newUserArray!=undefined && newUserArray.length>0) {
              for (let index = 0; index < newUserArray.length; index++) {
                if (this._currentChat.group==true) {
          
                  if (newUserArray[index].uid!=this._userId) {
                    this._visible_name.push({
                      uid: newUserArray[index].uid,
                      name: newUserArray[index].name,
                      unread: newUserArray[index].unread*1,
                      fcm_token:newUserArray[index].fcm_token
                      // fcm_token:localStorage.getItem("ousr_fcm_token")
                    });  
          
                  }else{
                    this._visible_name.push({
                      uid: newUserArray[index].uid,
                      name: newUserArray[index].name,
                      unread: 0,
                      fcm_token:localStorage.getItem("user_fcm_token")
                    });  
                  }
          
                }else{
                  if (newUserArray[index].uid!=this._userId) {
                    this._visible_name.push({
                      uid: newUserArray[index].uid,
                      name: newUserArray[index].name,
                      unread: 0,
                      fcm_token:newUserArray[index].fcm_token
                      // fcm_token:localStorage.getItem("user_fcm_token")
                    });  
          
                  }else{
                    this._visible_name.push({
                      uid: newUserArray[index].uid,
                      name: newUserArray[index].name,
                      unread: newUserArray[index].unread*1,
                      fcm_token:newUserArray[index].fcm_token
                      // fcm_token:localStorage.getItem("ousr_fcm_token")
                    });  
                  }
                }

                localStorage.setItem("visible_array",""+this._visible_name);
                  
              }
            }
            
          }        
        }
      })
    );
    window.scrollTo(0,document.body.scrollHeight);


  }

  ngOnInit() {
    if (this._currentChat!=null){
      console.warn(this._currentChat);
    }
  }

  ngAfterViewInit() {
    this.content.scrollToBottom(); // For messsages already present
    this.messageContainers.changes.subscribe((list: QueryList<ElementRef>) => {
      this.content.scrollToBottom(); // For messages added later
    });
  }

  async handleButtonClick() {
    const loading = await loadingController.create({
      message: 'Please wait...',
      duration: 1000
    });
    if (this._oldChats.length<20 && this._oldChats.length>10) {
      // this.chatLength=this._oldChats.length;
      this.chatLength=20;
    }else if(this._oldChats.length<40 && this._oldChats.length>20){
      this.chatLength=40;
      this.chatLength=this._oldChats.length;
      this.showMoreChat=false;
    }else if(this._oldChats.length<60 && this._oldChats.length>40){
      this.chatLength=this._oldChats.length;
      this.showMoreChat=false;
    }else{
      this.showMoreChat=false;
    }
    await loading.present();
  }

    async presentActionSheet() {
      console.log(this._currentChat)
      var ar=[];
      if (this._currentChat) {
        for (let index = 0; index < this._currentChat.visible_name.length; index++) {
          ar.push({
            text: this._currentChat.visible_name[index]['name'],
              icon: 'share',
          })
          
        }
      }
    const actionSheet = await this.actionSheetController.create({
      header: 'Members',
      cssClass: 'my-custom-class',
      buttons:ar
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


  getMsgFromName(userId) {
    for (let usr of this.chat.users) {
      if (usr.id == userId) {
        return usr.nickname;
      }
    }
    return 'Deleted';
  }

  sendMessage() {

    firebase.firestore().collection('chats').doc(this.uid).collection(this.o_uid).add({
      time: Date.now(),
      uid: this.uid,
      msg: this.newMsg,
      lastMsg: this.newMsg,
      createAt: this.datepipe.transform(new Date(), 'dd/MM/yyyy HH:mm:ss')
    });

    firebase.firestore().collection('chats').doc(this.o_uid).collection(this.uid).add({
      time: Date.now(),
      uid: this.uid,
      msg: this.newMsg,
      lastMsg: this.newMsg,
      createAt: this.datepipe.transform(new Date(), 'dd/MM/yyyy HH:mm:ss')
    }).then(() => {
      this.newMsg = "";
      this.content.scrollToBottom();
    });
  }

  async showPop(msgId,mesage) {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Delete Confirmation!',
      message: 'Are you sure you want to <strong>delete</strong>?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Delete',
          handler: () => {
            //this._connecter.deleteMessage(this._chatId, msgId);
            console.warn(this._oldChats[this._oldChats.length - 1].mesage)
            if (this._oldChats[this._oldChats.length - 1].mesage==mesage) {
              this._connecter.deleteMessage(this._chatId, msgId);
              if (this._chatId) {
                this.fetchOldChat();
              }
              this._connecter.updateLastMessage(this._chatId, "");
              console.warn(1)
              console.warn(this._oldChats[this._oldChats.length - 2].mesage)
            } else {
              console.warn(2)
              this._connecter.deleteMessage(this._chatId, msgId);
            }
          }
        }
      ]
    });

    await alert.present();

  }

  


  async atchFile() {
    if (this._chatId) {
      const modal = await this.modalController.create({
        component: AttachmentUploadPage,
        swipeToClose: true,
        componentProps: {
          'chatId': this._chatId,
          'messageCount': this._mesageCount,
          'currentChat': this._currentChat
        }
      });
      modal.onDidDismiss()
        .then((data) => {
          //const user = data['data'];
        });
      return await modal.present();
    }
  }
  
  sendChat() {
    if(this._chatId) {
      // console.log(this.newMsg)
      var msg = this.newMsg.trim()

      var _visible_name = [];
      if (this._currentChat.visible_name) {
        var newUserArray=this._currentChat.visible_name;
        console.warn(newUserArray);
      var ureadCount=0;
      var recieverToken="";
      if (this._currentChat.group) {
        console.warn("enter into the group")
        for (let index = 0; index < newUserArray.length; index++) {
          console.warn(this._authUsr.id);
          console.warn(newUserArray[index].uid);
          
          if (newUserArray[index].uid!=this._authUsr.id) {
            _visible_name.push({
              uid: newUserArray[index].uid,
              name: newUserArray[index].name,
              unread: newUserArray[index].unread*1 +1,
              fcm_token: newUserArray[index].fcm_token
            });  

            this._connecter.sendFirebasePush(newUserArray[index].fcm_token)
              .subscribe(  
                result => { 
                },
                error => {
                  // this._connecter.presentToast('error : '+error);
                }
            );
          }else{
            _visible_name.push({
              uid: newUserArray[index].uid,
              name: newUserArray[index].name,
              unread: 0,
              fcm_token: localStorage.getItem("user_fcm_token")
            });  
          }
        }
      }else {
        // If message to a single person
          console.warn("enter into a non group")
         /*  console.warn(newUserArray[0].fcm_token);
          console.warn(newUserArray[1].fcm_token);
          console.warn(newUserArray[0].uid);
          console.warn(newUserArray[1].uid);
          console.warn(this._authUsr.id); */
  
          if (newUserArray[0].uid==this._authUsr.id) {
            _visible_name.push({
              uid: newUserArray[0].uid,
              name: newUserArray[0].name,
              unread: newUserArray[0].unread*1 +1,
              fcm_token: newUserArray[0].fcm_token
            });  
  
              this._connecter.sendFirebasePush(newUserArray[0].fcm_token)
              .subscribe(  
                result => { 
                },
                error => {
                  // this._connecter.presentToast('error : '+error);
                }
            );
  
          }else if (newUserArray[1].uid==this._authUsr.id) {
            _visible_name.push({
              uid: newUserArray[1].uid,
              name: newUserArray[1].name,
              unread:newUserArray[1].unread*1 +1,
              fcm_token: newUserArray[1].fcm_token
            });  
  
              this._connecter.sendFirebasePush(newUserArray[1].fcm_token)
              .subscribe(  
                result => { 
                },
                error => {
                  // this._connecter.presentToast('error : '+error);
                }
            );
          }
          
          if (newUserArray[0].uid!=this._authUsr.id) {
            _visible_name.push({
              uid: newUserArray[0].uid,
              name: newUserArray[0].name,
              unread: 0,
              fcm_token: newUserArray[0].fcm_token
              // fcm_token: localStorage.getItem("user_fcm_token")
            });  
          }else if (newUserArray[1].uid!=this._authUsr.id) {
            _visible_name.push({
              uid: newUserArray[1].uid,
              name: newUserArray[1].name,
              unread: 0,
              fcm_token: newUserArray[1].fcm_token
              // fcm_token:""+localStorage.getItem("user_fcm_token")
            });  
          }
  
        }
    


    console.warn(_visible_name)
    }

      var ar = {
        mesage: msg,
        image:null,
        createAt: this.datepipe.transform(new Date(), 'dd/MM/yyyy HH:mm:ss'),
        message_by: this._authUsr.id,
        message_by_name: this._authUsr.name,
        users: _visible_name
      }

      console.warn(JSON.stringify(ar))
      // this._connecter.createNewMessage(ar, this._chatId, msg);
    
      this._connecter.createNewMessage(ar, this._chatId, msg, this.datepipe.transform(new Date(), 'dd/MM/yyyy HH:mm:ss'), this._authUsr.id,(this._mesageCount*1+1),this._authUsr.name,_visible_name);
      this.newMsg = '';
      this.content.scrollToBottom();
    }
  }

  fetchOldChat() {
    this._connecter.fetchChats(this._chatId);
  }

  deleteMsg(msgId) {
    this._connecter.deleteMessage(this._chatId,msgId);
  }

  getOtherId(OtherId){
    if (OtherId === this._authUsr.id) {
      
    }else{
      this.o_uid = OtherId;
      localStorage.setItem("other_id",OtherId);
      localStorage.setItem("userName",this._currentChat.visible_name);
    }
  }

  ngOnDestroy() {
    if(this._visible_name!=null && this._visible_name.length>0){
      console.warn("generatedName : "+JSON.stringify(this._visible_name));
       this._connecter.messageSeenBy(this._chatId,this._visible_name);
    }
    this.subscriptions.unsubscribe();
  }

  copyToClipboard(item) {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (item));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
  }

  calculateDiff(data){
    let date = new Date(data.sent);
    let currentDate = new Date();

    let days = Math.floor((currentDate.getTime() - date.getTime()) / 1000 / 60 / 60 / 24);
    console.log(currentDate.getTime());
    console.log(days);

    return days;
  }


}