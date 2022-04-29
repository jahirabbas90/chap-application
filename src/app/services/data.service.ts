import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private authUser = new BehaviorSubject<any>(null);
  public authUser$ = this.authUser.asObservable();

  private allChatRecords = new BehaviorSubject<any>(null);
  public allChatRecords$ = this.allChatRecords.asObservable();

  private perticularChatDetails = new BehaviorSubject<any>(null);
  public perticularChatDetails$ = this.perticularChatDetails.asObservable();
  chatInfo: any;

  private perticularChatMessages = new BehaviorSubject<any>(null);
  public perticularChatMessages$ = this.perticularChatMessages.asObservable();
  MsgInfo: any;

  private allUsers = new BehaviorSubject<any>(null);
  public allUsers$ = this.allUsers.asObservable();

  // private newlyCreatedChatId = new BehaviorSubject<any>(null);
  // public newlyCreatedChatId$ = this.newlyCreatedChatId.asObservable();

  public exsistChat: any;

  constructor(private _firestore: AngularFirestore, private toastCtrl: ToastController, private router:Router) { 
  }

  login(_username: any, _password: any) {

    this._firestore.collection('users', ref => ref.where('email', '==', _username).where('password', '==', _password))
    .valueChanges({ idField: 'id' }).subscribe( data => {
      var u: any = data;
      //console.log(data);
      if(data && data.length) {
        this.authUser.next(u[0]);
        this.getChats(u[0]);
        this.getAllUsers(u[0]);
      }
      else{
        this.showSuccess('error', 'Usernam or password mismatch');
        this.authUser.next(null);
      }
    }); 
  }

  setUserOnline(id: any) {

    var usersUpdate = {};
    usersUpdate[`state.online`] = true;
    this._firestore.collection('users').doc(id).update(usersUpdate)
    .then(() => {
        //console.log("Document successfully updated!");
    })
    .catch((error) => {
        // The document probably doesn't exist.
        //console.error("Error updating document: ", error);
    });
    
  }

  // updateOnDisconnect() {
  //   return this.afAuth.authState.pipe(
  //     tap(user => {
  //       if (user) {
  //         this.db.object(`status/${user.uid}`).query.ref.onDisconnect()
  //           .update({
  //             status: 'offline',
  //             timestamp: this.timestamp
  //         });
  //       }
  //     })
  //   );
  // }

   
  public addNewUser(){ 
   
      var val = {
        company: "webmaddy",
        email: "jahir@webmaddy.com",
        img_url: "https://via.placeholder.com/150",
        name: "",
        password: "123456",
        salt: "hashing code",
        user_id: "2",
        username: "jahir",
        state: {
          available: true,
          online: true
        },
        logs: {
          last_login: new Date().getTime(),
          last_password_reset: new Date().getTime()
        },
        timestamp: new Date().getTime()
      };
      //console.log(val);
      const docRef = this._firestore.collection('users')
      docRef.add(val).then(() => {
        this.showSuccess('success', 'User added');
      })
      .catch((error) => {
          console.error("Error writing document: ", error);
          this.showSuccess('error', 'Something went wrong!');
      });
    
  }
  
  public addGroupChat(auth, group_name, user, members){ 
    if(auth) {
    
      var val = {
        group: true,
        group_name: group_name,
        last_text: "",
        users: user,
        members: members,
        timestamp: new Date().getTime()
      };
      //console.log(val);
      const docRef = this._firestore.collection('chat_rooms')
      docRef.add(val).then((docRef) => {
        // console.log(docRef.id);
        
      })
      .catch((error) => {
          // console.error("Error writing document: ", error);
          this.showSuccess('error', 'Something went wrong!');
      });
    }
  }  

  public getChats(auth){ 
    if(auth) {
      this._firestore.collection<any>('chat_rooms', ref => ref.where('users', 'array-contains', auth.user_id.toString())).valueChanges({ idField: 'id' })
      // .pipe(
      //   map(actions => actions.map(a =>{
      //     const data = a.payload.doc.data();
      //     const id = a.payload.doc.id;
      //     return { id, data };
      //   }))
      // )
      .subscribe(data => {
        // console.log(data);
        this.allChatRecords.next(data); 
      });
    }   
  }

  public getAllUsers(auth){ 
    if(auth) { 
      // console.log( auth.user_id);   
      this._firestore.collection<any>('users', ref => ref.where('user_id', '!=', auth.user_id.toString())).valueChanges({ idField: 'id' })
      // .pipe(
      //   map(actions => actions.map(a =>{
      //     const data = a.payload.doc.data();
      //     const id = a.payload.doc.id;
      //     return { id, data };
      //   }))
      // )
      .subscribe(data => {
        //console.log(data);
        this.allUsers.next(data); 
      });
    }
  }

  public startChat(auth, rec){ 
    if(auth) {
      var user = [auth.user_id,rec.user_id];
      var members = [
        {
          deleted: false,
          unread_count: 0,
          user_id : auth.user_id,
          user_name: auth.username
        },
        {
          deleted: false,
          unread_count: 0,
          user_id : rec.user_id,
          user_name: rec.username
        }
      ];
      var val = {
        group: false,
        group_name: "",
        last_text: "",
        users: user,
        members: members,
        timestamp: new Date().getTime()
      };


      // this._firestore.collection<any>('chat_rooms', ref => ref.where('users', '==', user)).snapshotChanges()
      // .pipe(
      //   map(actions => actions.map(a =>{
      //     const data = a.payload.doc.data();
      //     const id = a.payload.doc.id;
      //     return { id, data };
      //   }))
      // ).subscribe(data => {
      //   if(data.length) {
      //     console.log('existing data');
      //     console.log(data);
      //     // this.router.navigate(['/chat', data[0].id]);
      //   } 
      //   else {
      //     const docRef = this._firestore.collection('chat_rooms')
      //     docRef.add(val).then((docRef) => {
      //       console.log('new data');
      //       console.log(docRef);
      //       // this.getParticularChatDetail(docRef.id);
      //       //this.router.navigate(['/chat', docRef.id]);
      //       // this.newlyCreatedChatId.next(docRef.id);
      //     })
      //     .catch((error) => {
      //         // console.error("Error writing document: ", error);
      //         this.showSuccess('error', 'Something went wrong!');
      //     });
      //   }
      // });
      // return;

      const docRef = this._firestore.collection('chat_rooms')
      return new Promise<any>((resolve, reject) =>{
        docRef.add(val).then(res => {
          
          this.setChatMembers(res.id, members);
          

        }, err => reject(err));
      });  
      
    }
  }  

  public setChatMembers(id, members) {
    this._firestore.collection('chat_rooms/'+id+'/membercol').add({members});
  }
  
  public getParticularChats(auth, id){ 
    if(auth) {
      const docRef = this._firestore.collection('chat_rooms').doc(id).collection('messages', ref => ref
      //.limit(5)
      .orderBy('timestamp', 'asc'))
      this.chatInfo = docRef.snapshotChanges().pipe(
        map(actions => actions.map(a =>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, data };
        }))
      ).subscribe(data => {
        //console.log(data);
        this.perticularChatMessages.next(data);
      });

      const docRefNew = this._firestore.collection('chat_rooms').doc(id);
      docRefNew.snapshotChanges()
      .pipe(
          map(action => {
              const data = action.payload.data();
              const id = action.payload.id;
              return { id, data };
          })
      ).subscribe(data => {
        // console.log(data);
        this.perticularChatDetails.next(data);
      });

    }
  }
  
  public addChatMsg(auth, msg, id){  
    if(auth) {

      var val = {
        from: auth.user_id,
        user_name: auth.username,
        text: msg,
        timestamp: new Date().getTime()
      };
      // console.log(id);
      // return ;
      const docRef = this._firestore.collection('chat_rooms').doc(id).collection('messages')
      docRef.add(val).then(() => {

        this._firestore.collection('chat_rooms').doc(id).update({
          last_text: msg
        })
        .then(() => {
            //console.log("Document successfully updated!");

        })
        .catch((error) => {
            // The document probably doesn't exist.
            //console.error("Error updating document: ", error);
        });

      })
      .catch((error) => {
          //console.error("Error writing document: ", error);
          this.showSuccess('error', 'Something went wrong!');
      });
      //console.log(id);
      // return;
      


    }
  }
  
  public updateChatMembersData(auth, id, members){ 
    if(auth) {
      const key = `members`
      const property = members;

      const docRefN = this._firestore.collection('chat_rooms').doc(id)
      docRefN.update({
        [key]: property
      }).then(() => {

      })
      .catch((error) => {
        // The document probably doesn't exist.
        //console.error("Error updating document: ", error);
      });
      
    }
  }

  async showSuccess(type, msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });  
    toast.present();
  } 
  

}
