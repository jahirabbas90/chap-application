import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { ModalController, IonContent   } from '@ionic/angular';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { async, from, Observable } from 'rxjs';
import { finalize, switchMap, tap } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { MyConnecterService } from '../../services/my-connecter.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import * as CryptoJS from 'crypto-js';

export interface MyData {
  imagename: string;
  filepath: string;
  size: number;
}

@Component({
  selector: 'app-attachment-upload',
  templateUrl: './attachment-upload.page.html',
  styleUrls: ['./attachment-upload.page.scss'],
})
export class AttachmentUploadPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;
  @Input() chatId: any;
  @Input() messageCount: any;
  @Input() usrId: any;
  @Input() currentChat: any;

  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  UploadedFileURL: Observable<string>;
  images: Observable<MyData[]>;
  fileName:string;
  fileSize:number;
  isUploading:boolean;
  isUploaded:boolean;
  uploadedFType: string = 'text';
  _authUsr: any;
  encryptSecretKey:string='angular_chat_app';

  private imageCollection: AngularFirestoreCollection<MyData>;
  constructor(public modalController: ModalController, private _connecter: MyConnecterService, 
    private storage: AngularFireStorage, private database: AngularFirestore, public datepipe: DatePipe,
     private router: Router,private camera:Camera) {
    this.isUploading = false;
    this.isUploaded = false;
    //Set collection where our documents/ images info will save
    this.imageCollection = database.collection<MyData>('freakyImages');
    this.images = this.imageCollection.valueChanges();
    _connecter.authUser$.subscribe(data => {
      this._authUsr = data;
      console.log(this._authUsr)
      if (Object.keys(this._authUsr).length === 0) {
        this.router.navigate(['/en-login']);
      }
    });
  }

  ngOnInit() {
    //console.log(this.chatId);
    //console.log(this.usrId);
  }

  async closeModal() {
    let data = {  };
    this.modalController.dismiss(data);
  }

  uploadFile(event: FileList) {
    
    const file = event.item(0)
    if (file.type.split('/')[0] !== 'image') { 
      this.uploadedFType = 'others';
      console.error('unsupported file type :( ')
    //  return;
    }
    else{
      this.uploadedFType = 'image';
    }
 
    this.isUploading = true;
    this.isUploaded = false;
 
    this.fileName = file.name;
    const path = `freakyStorage/${new Date().getTime()}_${file.name}`;
    const customMetadata = { app: 'Freaky Image Upload Demo' };
    const fileRef = this.storage.ref(path);

    const encryptData= this.encryptData(file);
     console.warn(encryptData);

    this.task = this.storage.upload(path, file, { customMetadata });
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges().pipe(
    
      finalize(() => {
        // Get uploaded file storage path
        this.UploadedFileURL = fileRef.getDownloadURL();
        this.UploadedFileURL.subscribe(resp=>{
          this.sendChat({
            imagename: file.name,
            filepath: resp,
            size: this.fileSize
          });
      
          this.isUploading = false;
          this.isUploaded = true;
        },error=>{
          console.error(error);
        })
      }),
      tap(snap => {
          this.fileSize = snap.totalBytes;
      })
    )
   }

   async takePhoto(){
    try {
     const options:CameraOptions ={
       quality:50,
       targetHeight:400,
       targetWidth:400,
       destinationType:this.camera.DestinationType.DATA_URL,
       encodingType:this.camera.EncodingType.JPEG,
       mediaType:this.camera.MediaType.PICTURE
     }

     const result= await this.camera.getPicture(options);
     const image=`data:image/jpeg;base64,${result}`;
     const encryptData= this.encryptData(result);
     console.warn(encryptData);
    

     //const pictures=this.storage.ref('freakyStorage/myPhoto');
     this.fileName = ""+new Date().getTime();
     const path = `${this.fileName}.jpeg`;

     //const pictures=this.storage.ref('freakyStorage/'+path);
     //pictures.putString(image,'data_url');

     

    //  Send image to User
    this.isUploading = true;
    this.isUploaded = false;
 
    //const pictures=this.storage.ref(path);
    //pictures.putString(image,'data_url');

    const customMetadata = { app: 'Freaky Image Upload Demo' };
    // const fileRef = this.storage.ref('freakyStorage/'+path);
    const fileRef = this.storage.ref('EncryptedImage/'+path);
    fileRef.putString(image,'data_url');
    // Duplicate base 64 image upload to server
    // fileRef.putString(result,'data_url');
    

    // this.task = this.storage.upload(path, image, { customMetadata });
    this.task = this.storage.upload(path, image, { customMetadata });
    this.percentage = this.task.percentageChanges();

    //alert("UploadedFileURL : "+JSON.stringify(fileRef.getDownloadURL()));

    this.snapshot = this.task.snapshotChanges().pipe(
      finalize(() => {
        // Get uploaded file storage path
        this.UploadedFileURL = fileRef.getDownloadURL();

        this.UploadedFileURL.subscribe(resp=>{
          this.sendChat({
            imagename: this.fileName+".jpeg",

            filepath: resp,
            size: this.fileSize
          });
      
          this.isUploading = false;
          this.isUploaded = true;

        },error=>{
          console.error(error);
        })
      }),
      tap(snap => {
          this.fileSize = snap.totalBytes;
      })
    )
     

    } catch (error) {
      alert(error)
    }
    
  }


  uploadBase64(folder: string, name: string, base64: string) {
		const path = `${folder}/${Date.now()}_${name}`; // full path file
		const ref = this.storage.ref(path);

		const task = ref.putString(base64, 'data_url'); // upload task
		return this.getDownloadUrl(task, ref);
	}

	private getDownloadUrl(uploadTask: AngularFireUploadTask, ref: AngularFireStorageReference): Observable<string> {
		return from(uploadTask).pipe(switchMap(() => ref.getDownloadURL()));
	}

  async upload() {
    const url = await this.uploadBase64('EncryptedImage', 'image.jpg', 'data:image/jpeg;base64,...').toPromise();
    console.log(url);
    alert(url);
  }

  addImagetoDB(image: MyData) {
  // addImagetoDB(image) {

    this.database.collection('groups/' + this.chatId + '/messages').add({
      msg: null,
      messageType: this.uploadedFType,
      image: image.filepath,
      file_name: image.imagename,
      from: this.usrId,
      createdAt: new Date().getTime()
    })
    this.closeModal()

    //Create an ID for document
    // const id = this.database.createId();
 
    // // Set document id with value in database
    // this.imageCollection.doc(id).set(image).then(resp => {
    //   console.log(resp);
    // }).catch(error => {
    //   console.log("error " + error);
    // });
  }

  addImagetoDBSingleUser(image: MyData) {
    this.database.collection('conversations').doc(localStorage.getItem('userId')).collection(localStorage.getItem('other_id')).add({
      msg: null,
      messageType: this.uploadedFType,
      image: image.filepath,
      file_name: image.imagename,
      message_by: this.usrId,
      message_by_name: localStorage.getItem('userName'),
      time: Date.now(),
      createdAt: this.datepipe.transform(new Date(), 'dd/MM/yyyy HH:mm:ss')
    })
    this.closeModal()
  }


  sendChat(image: MyData) {
    if (this.chatId) {
      var msg = null
      var _visible_name = [];
      var newUserArray=this.currentChat.visible_name;
      console.error("attach_visible_name"+JSON.stringify( newUserArray));
      console.error("is_group"+JSON.stringify( this.currentChat.group));
      var ureadCount=0;

      // If message send to a group
      if (this.currentChat.group) {
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
                  this._connecter.presentToast('error : '+error);
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
      }
       else {
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
                this._connecter.presentToast('error : '+error);
              }
          );
        }
        
        if (newUserArray[0].uid!=this._authUsr.id) {
          _visible_name.push({
            uid: newUserArray[0].uid,
            name: newUserArray[0].name,
            unread: 0,
            fcm_token: localStorage.getItem("user_fcm_token")
          });  
        }else if (newUserArray[1].uid!=this._authUsr.id) {
          _visible_name.push({
            uid: newUserArray[1].uid,
            name: newUserArray[1].name,
            unread: 0,
            fcm_token:""+localStorage.getItem("user_fcm_token")
          });  
        }

      }
      console.log("new_visible_array : "+JSON.stringify(_visible_name) );


      var ar = {
        mesage: msg,
        image: image.filepath,
        createAt: this.datepipe.transform(new Date(), 'dd/MM/yyyy HH:mm:ss'),
        message_by: this._authUsr.id,
        message_by_name: this._authUsr.name,
        users: _visible_name
        // users: this.currentChat.visible_name
      }
      console.warn(ar);
      this._connecter.createNewMessage(ar, this.chatId, this.currentChat.last_message, this.datepipe.transform(new Date(), 'dd/MM/yyyy HH:mm:ss'), this._authUsr.id,(this.messageCount*1+1),this._authUsr.name,_visible_name);
      this.closeModal()
  }
}

encryptData(data) {

    try {
      return CryptoJS.AES.encrypt(JSON.stringify(data), this.encryptSecretKey).toString();
    } catch (e) {
      console.log(e);
    }
  }

decryptData(data) {

    try {
      const bytes = CryptoJS.AES.decrypt(data, this.encryptSecretKey);
      if (bytes.toString()) {
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      }
      return data;
    } catch (e) {
      console.log(e);
    }
  }



}
