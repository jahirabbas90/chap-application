import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, IonContent, ModalController, PopoverController } from '@ionic/angular';
import  firebase from 'firebase';
import { empty, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EnDataService } from 'src/app/services/en-data.service';
import { AttachmentUploadPage } from '../attachment-upload/attachment-upload.page';

@Component({
  selector: 'app-en-one-on-one',
  templateUrl: './en-one-on-one.page.html',
  styleUrls: ['./en-one-on-one.page.scss'],
})
export class EnOneOnOnePage implements OnInit {

  userId:any;
  userName:any;
  newMsg = '';
  chatTitle = '';
  _currentUser;
  myId;
  chat = null;
  _users = [];
  chats=[];
  messages: Observable<any[]>;
  uid:any;
  o_uid:any;
  lastMsg:string;
 

  @ViewChild(IonContent) content: IonContent;
  // @ViewChild('input', { read: ElementRef }) msgInput: ElementRef;

  constructor(private route: ActivatedRoute, private chatService: EnDataService,
    private router: Router, private alertCtrl: AlertController, public modalController: ModalController,
    public datepipe: DatePipe, public popovercontroller: PopoverController) {

    /* this._currentUser = chatService.currentUser.uid;
    if (chatService.currentUser && 'uid' in chatService.currentUser) {
      this.myId = chatService.currentUser.uid
      this.uid = chatService.currentUser.uid
      console.log(this.myId);
    }
    else {
      this.router.navigateByUrl('/en-login');
    } */
    this.uid=localStorage.getItem('currentUser');
    this.o_uid = localStorage.getItem('other_id');
    console.log(this.uid);
    console.log(this.o_uid);
    this.route.params.subscribe(data => {
     /*  this.userId = data.id;
      this.o_uid = data.id; */
      this.userName = data.nickname;
    })

    firebase.firestore().collection("chats").doc(this.uid).collection(this.o_uid).orderBy("time").onSnapshot(snap => {
      this.chats = [];
      snap.forEach(child => {
        this.chats.push(child.data());
      })

      // this.chat = this.chats;
    })

  }


  ngOnInit() {
    // this.messages = this.chatService.getOneChatMessages()
  }

  sendMessage() {
    /* this.chatService.addOneChatMessage(this.newMsg,this.userId).then(() => {
      this.newMsg = '';
      this.content.scrollToBottom();
    }); */
    
    firebase.firestore().collection('chats').doc(this.uid).collection(this.o_uid).add({
      time:Date.now(),
      uid: this.uid,
      msg:this.newMsg,
      lastMsg: this.newMsg,
      // createAt: this.millisecondsToHuman(Date.now())
      // createAt: new Date().toJSON()
      createAt: this.datepipe.transform(new Date(), 'dd/MM/yyyy HH:mm:ss')
    });

    firebase.firestore().collection('chats').doc(this.o_uid).collection(this.uid).add({
      time: Date.now(),
      uid: this.uid,
      msg: this.newMsg,
      lastMsg: this.newMsg,
      //createAt: new Date().getTime()
      // createAt: new Date().toJSON()
      createAt: this.datepipe.transform(new Date(), 'dd/MM/yyyy HH:mm:ss')
    }).then(()=>{
      this.newMsg="";
      this.content.scrollToBottom();
    });

  }

  async atchFile() {
    localStorage.setItem('from_group','N');
    if (this.chat) {
      const modal = await this.modalController.create({
        component: AttachmentUploadPage,
        swipeToClose: true,
        componentProps: {
          'chatId': this.chat.id,
          'usrId': this.uid,
          'ousrId': this.o_uid
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


  send(){

  }

 /*  triggerFile() {
    document.getElementById("file").click();
  }

  detectFiles(){
    var files=(<HTMLInputElement>document.getElementById("file")).files;
    var selectedFiles=[];
    for(var i=0;i<files.length;i++){
      var obj = {
        name :files[i].name,
        size: files[i].size,
        type: files[i].type
      };

      selectedFiles.push(obj);
      sessionStorage.setItem("previews",JSON.stringify(selectedFiles));
      this.previewFiles();
    }
  }

  async previewFiles(){
    const popover= await this.popovercontroller.create({
      component: FilePreviewPage
    });
    popover.present();
    popover.onDidDismiss().then(()=>{
      if (sessionStorage.getItem("send")=="true") {
        sessionStorage.setItem("send","false");
        var files=(<HTMLInputElement>document.getElementById("file")).files;
        for(var i=0;i<files.length;i++){
          var fileId=Date.now();
          this.chat.push({
            fileName:files[i].name,
            fileSize: files[i].size,
            fileType: files[i].type,
            isUploading: true,
            uid: this.uid,
            fileId: fileId+files[i].name,
            progress: 0,
          });
          this.uploadFile(files[i],fileId,files[i].name,files[i].type);
        }
      }
    })
  }

  uploadFile(file,fileId,fileName,fileType){
    var uploadTask=firebase.storage().ref(fileName).put(file);
    uploadTask.on("state_changed",snap=>{
      var percentage=snap.bytesTransferred/snap.totalBytes;
      var index= this.chats.findIndex(x => x.fileId==fileId+fileName);
      this.chats[index]['progress']= percentage*100;
    },(err)=>{
      console.log(err)
    },()=>{
      var index=this.chats.findIndex(x=>x.fileId==fileId+fileName);
      this.chats[index]['isUploading'] = false;
      this.chats[index]['msg'] = fileName;

      firebase.database().ref("chats/"+this.uid+"/"+this.o_uid).push({
        msg:fileName,
        uid:this.uid,
        time:firebase.database.ServerValue.TIMESTAMP,
        isUploading:false,
        fileType:fileType
      })

      firebase.database().ref("chats/" + this.o_uid + "/" + this.uid).push({
        msg: fileName,
        uid: this.uid,
        time: firebase.database.ServerValue.TIMESTAMP,
        isUploading: false,
        fileType: fileType
      })

    })
  }

  openFile(fileName){
    firebase.storage().ref(fileName).getDownloadURL().then(url=>{
      window.open(url,"_blank")
    })
  }

  getIcon(type: string) {
    if (type.startsWith("image")) {
      return "image-outline";
    } else if (type.startsWith("video")) {
      return "videocam-outline";
    } else if (type.startsWith("audio")) {
      return "musical-note-outline";
    } else {
      return "document-outline";
    }
  }

  getIconColor(type: string) {
    if (type.startsWith("image")) {
      return "primary";
    } else if (type.startsWith("video")) {
      return "success";
    } else if (type.startsWith("audio")) {
      return "danger";
    } else {
      return "warning";
    }
  } */
  

}

