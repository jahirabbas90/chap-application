import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
// import { AngularFirestore } from '@angular/fire/firestore';
// import * as firebase from 'firebase/app';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { take, switchMap, map, timestamp } from 'rxjs/operators';
import { Observable, throwError, BehaviorSubject } from 'rxjs';

import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { finalize, tap } from 'rxjs/operators';


 
export interface User {
  uid: string;
  email: string;
}
export interface MyData {
  name: string;
  filepath: string;
  size: number;
}

export interface Message {
  createdAt: firebase.firestore.FieldValue;
  id: string;
  from: string;
  msg: string;
  fromName: string;
  myMsg: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class EnDataService {

  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  UploadedFileURL: Observable<string>;
  images: Observable<MyData[]>;
  fileName:string;
  fileSize:number;
  isUploading:boolean;
  isUploaded:boolean;
  private imageCollection: AngularFirestoreCollection<MyData>;
  
  private addedUser = new BehaviorSubject<any>(null);
  public addedUser$ = this.addedUser.asObservable();

  private authToken = new BehaviorSubject<any>(null);
  public authToken$ = this.authToken.asObservable();
  loggedInUserToken: string = null;
  

  currentUser: User = null;
  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private storage: AngularFireStorage) { 
    this.afAuth.onAuthStateChanged((user) => {
      //console.log(user);
      if (user!=null) {
        this.currentUser = user;
      }         
    });

    this.isUploading = false;
    this.isUploaded = false;
    this.imageCollection = afs.collection<MyData>('freakyImages');
    this.images = this.imageCollection.valueChanges();

    if (localStorage.getItem("currentUser") === null || localStorage.getItem("currentUser") === undefined) {
      this.loggedInUserToken="";
     }
    else {
      this.loggedInUserToken = localStorage.getItem('currentUser');
    }
    this.authToken.next(this.loggedInUserToken);
  }

  async signup({ email, password, nickname, company }): Promise<any> {
    const credential = await this.afAuth.createUserWithEmailAndPassword(
      email,
      password
    );
 
    const uid = credential.user.uid;
 
    return this.afs.doc(
      `users/${uid}`
    ).set({
      uid,
      email: credential.user.email,
      nickname: nickname,
      company: company,
      id: uid
    })
  }

  signIn({ email, password }) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  signOut(): Promise<void> {
    return this.afAuth.signOut();
  }

  resetPw(email) {
    //return this.afAuth.auth.sendPasswordResetEmail(email);
  }
      
  getUsers() {
    // console.log(this.currentUser.uid)
    return this.afs.collection('users', ref => ref.where('uid', '!=', this.currentUser.uid)).valueChanges({ idField: 'uid' }).subscribe(
      data => {
        this.addedUser.next(data);
      });
  }
   
  private getUserForMsg(msgFromId, users: User[]): string {    
    for (let usr of users) {
      if (usr.uid == msgFromId) {
        return usr.email;
      }
    }
    return 'Deleted';
  }
  
  getGroups() {
    const userId = localStorage.getItem('currentUser');
   /*  if (this.currentUser!=null) {
      return this.afs.collection(`users/${this.currentUser.uid}/groups`).snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data();
          const user_group_key = a.payload.doc.id;
          return this.getOneGroup(data['id'], user_group_key);
        }))
      )
    }  */

    if (userId != null) {
      return this.afs.collection(`users/${userId}/groups`,ref => ref.orderBy('createdAt')).snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data();
          const user_group_key = a.payload.doc.id;
          return this.getOneGroup(data['id'], user_group_key);
        }))
      )
    }
    
  }

  getOneGroup(id, user_group_key = null) {
    return this.afs.doc(`groups/${id}`).snapshotChanges().pipe(
      take(1),
      map(changes => {
        const data = changes.payload.data() as {};
        const group_id = changes.payload.id;
        return { user_group_key, id: group_id, ...data }; 
      })
    )
  }

  findUser(value) {
    let email = this.afs.collection('users', ref => ref.where('email', '==', value)).snapshotChanges().pipe(
      take(1),
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, data };
      }))
    );
    let nickname = this.afs.collection('users', ref => ref.where('nickname', '==', value)).snapshotChanges().pipe(
      take(1),
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, data };
      }))
    );
    return [email, nickname];
  }

  createGroup(group, title, users, emails) {
    let current = {
      email: this.currentUser.email,
      id: this.currentUser.uid,
      uid: this.currentUser.uid,
      nickname: 'owner',
      createdAt: new Date().getTime()

    };

    // let allUsers = [current, users];
    //users.push(current)
    if(!group) {
      title = emails.toString().replace(",", " - ");
    }
    // emails.push(this.currentUser.email)

    return this.afs.collection('groups').add({
      title: title,
      users: users,
      group: group,
      emails: emails

    }).then(res => {
      let promises = [];
      //console.log(users);
      for (let usr of users) {
        let oneAdd = this.afs.collection(`users/${usr.uid}/groups`).add({
          id: res.id
        });
        promises.push(oneAdd);

      }
      return Promise.all(promises);
    })
  }
  
  getChatMessages(groupId) {
    return this.afs.collection(`groups/${groupId}/messages`, ref => ref.orderBy('createdAt')).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as {};
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    )
  }
  // Chat functionality

  addOneChatMessage(msg,sender_id) {
    return this.afs.collection('messages').add({
      msg: msg,
      sender_id: sender_id,
      from: this.currentUser.uid,
      createdAt: firebase.firestore.Timestamp.now()
      // createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  }

  getOneChatMessages() {
    let users = [];
    return this.getOneUsers().pipe(
      switchMap(res => {
        users = res;
        console.log(users);
        return this.afs.collection('messages', ref => ref.orderBy('createdAt')).valueChanges({ idField: 'id' }) as Observable<Message[]>;
      }),
      map(messages => {
        // Get the real name for each user
        for (let m of messages) {
          m.fromName = this.getOneUserForMsg(m.from, users);
          m.myMsg = this.currentUser.uid === m.from;
        }
        return messages
      })
    )
  }

  private getOneUsers() {
    return this.afs.collection('users').valueChanges({ idField: 'uid' }) as Observable<User[]>;
  }


  private getOneUserForMsg(msgFromId, users: User[]): string {
    for (let usr of users) {
      if (usr.uid == msgFromId) {
        return usr.email;
      }
    }
    return 'Deleted';
  }

  addChatMessage(msg, chatId, users) {
    // return this.afs.collection('groups/' + chatId + '/messages').add({
    //   msg: msg,
    //   from: this.currentUser.uid,
    //   createdAt: new Date().getTime()
    // });
    //console.log(users);
    return this.afs.collection('groups/' + chatId + '/messages').add({
      msg: msg,
      messageType: 'text',
      from: this.currentUser.uid,
      createdAt: new Date().getTime()
    }).then(res => {
      this.afs.collection('groups').doc(chatId).update({
        last_text: msg,
        users: users
      })
      let promises = [];
      return Promise.all(promises);
    })

  }


  deleteMessage(gId, msgId) {
    this.afs.collection('groups/'+gId+'/messages').doc(msgId).update({
      delete: true,
      deletedBy: this.currentUser.uid
    })
  }

  uploadFile(event: FileList) {
    const file = event.item(0) 
    // Validation for Images Only
    if (file.type.split('/')[0] !== 'image') { 
      console.error('unsupported file type :( ')
      return;
    } 
    this.isUploading = true;
    this.isUploaded = false; 
    this.fileName = file.name;
    const path = `freakyStorage/${new Date().getTime()}_${file.name}`;
    const customMetadata = { app: 'Freaky Image Upload Demo' };
    const fileRef = this.storage.ref(path);
    this.task = this.storage.upload(path, file, { customMetadata });
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges().pipe(
      finalize(() => {
        // Get uploaded file storage path
        this.UploadedFileURL = fileRef.getDownloadURL();        
        this.UploadedFileURL.subscribe(resp=>{
          this.addImagetoDB({
            name: file.name,
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
 
  addImagetoDB(image: MyData) {
    //Create an ID for document
    const id = this.afs.createId();
    this.imageCollection.doc(id).set(image).then(resp => {
      console.log(resp);
    }).catch(error => {
      console.log("error " + error);
    });
  }

/*   addOneOnOneChatMessage(msg) {
    return this.afs.collection('messages').add({
      msg: msg,
      from: this.currentUser.uid,
      createdAt: firebase.afs.FieldValue.serverTimestamp()
    });
  } */

  addOneOnOneChatMessage(msg, chatId, users) {
    // return this.afs.collection('groups/' + chatId + '/messages').add({
    //   msg: msg,
    //   from: this.currentUser.uid,
    //   createdAt: new Date().getTime()
    // });
    //console.log(users);
    return this.afs.collection('groups/' + chatId + '/messages').add({
      msg: msg,
      messageType: 'text',
      from: this.currentUser.uid,
      createdAt: new Date().getTime()
    }).then(res => {
      this.afs.collection('users').doc(chatId).update({
        last_text: msg,
        users: users
      })
      let promises = [];
      return Promise.all(promises);
    })

  }


}
