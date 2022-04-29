import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonContent, AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { EnDataService } from '../../services/en-data.service';
import { ActivatedRoute, Router } from '@angular/router';
// import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { map } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';
import { AttachmentUploadPage } from '../attachment-upload/attachment-upload.page';

@Component({
  selector: 'app-en-chat',
  templateUrl: './en-chat.page.html',
  styleUrls: ['./en-chat.page.scss'],
})
export class EnChatPage implements OnInit {

  messages: Observable<any[]>;
  newMsg = '';
  chatTitle = '';
  _currentUser;
  myId;
  chat = null;
  _users = [];
  groupId: any

  @ViewChild(IonContent) content: IonContent;
  @ViewChild('input', { read: ElementRef }) msgInput: ElementRef;

  constructor(private route: ActivatedRoute, private chatService: EnDataService, 
    private router: Router, private alertCtrl: AlertController, public modalController: ModalController) {  
      // alert(1);
      this._currentUser = chatService.currentUser.uid;  
      console.log(this._currentUser);   
      if(chatService.currentUser && 'uid' in chatService.currentUser) {
        this.myId = chatService.currentUser.uid
      }
      else {
        this.router.navigateByUrl('/en-login');
      }
    }

  ngOnInit() {
    this.route.params.subscribe(data => {
      //console.log(data);
      this.groupId = data.id
      this.chatService.getOneGroup(data.id).subscribe(res => {
        //console.log(res);
        this.chat = res;
        this._users = this.chat.users;
        //console.log('my chat: ', this.chat);
        this.messages = this.chatService.getChatMessages(this.chat.id).pipe(
          map(messages => {
            this.content.scrollToBottom();
            for (let msg of messages) {
              msg['user'] = this.getMsgFromName(msg['from']);
            }
            //console.log(messages);
            return messages;
          })
        );
      })
    })
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

    for (let index = 0; index < this._users.length; index++) {
      if(this._currentUser && this._currentUser != this._users[index].uid) {
        if(this._users[index].unread_count > 0)
          this._users[index].unread_count = this._users[index].unread_count + 1;
        else
          this._users[index].unread_count = 1;
      }      
    }

    this.chatService.addChatMessage(this.newMsg, this.chat.id, this._users).then(() => {
      this.newMsg = '';
      this.content.scrollToBottom();
    });
  }

  async showPop(id) {
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
            // console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Delete',
          handler: () => {
            this.deleteMsg(id);
          }
        }
      ]
    });

    await alert.present();

  }

  deleteMsg(id) {
    this.chatService.deleteMessage(this.groupId, id)
  }

  leave() {
    // let newUsers = this.chat.users.filter(usr => usr.id != this.auth.currentUserId);

    // this.chatService.leaveGroup(this.chat.id, newUsers).subscribe(res => {
    //   this.router.navigateByUrl('/en-all-rooms');
    // });
  }

  sendFile() {
    // const options: CameraOptions = {
    //   quality: 70,
    //   destinationType: this.camera.DestinationType.DATA_URL,
    //   encodingType: this.camera.EncodingType.JPEG,
    //   mediaType: this.camera.MediaType.PICTURE,
    //   sourceType: this.camera.PictureSourceType.CAMERA,
    //   correctOrientation: true
    // }

    // this.camera.getPicture(options).then(data => {

    //   let obj = this.chatService.addFileMessage(data, this.chat.id);
    //   let task = obj.task;

    //   task.then(res => {
    //     obj.ref.getDownloadURL().subscribe(url => {
    //       this.chatService.saveFileMessage(url, this.chat.id);
    //     })
    //   });

    //   task.percentageChanges().subscribe(change => {
    //     console.log('change: ', change);
    //   })
    // });

    
  }

  async atchFile() {
    localStorage.setItem('from_group', 'Y');
    if(this.chat) {
      const modal = await this.modalController.create({
        component: AttachmentUploadPage,
        swipeToClose: true,
        componentProps: {
          'chatId': this.chat.id,
          'usrId':this._currentUser
        }
      });
      modal.onDidDismiss()
      .then((data) => {
        //const user = data['data'];
        console.log( data);
      });
      return await modal.present();
    }
    
    
  }

}
