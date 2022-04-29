(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~page-en-chat-en-chat-module~page-en-create-room-en-create-room-module~page-en-login-en-login~bdbac243"],{

/***/ "Y4Ib":
/*!*********************************************!*\
  !*** ./src/app/services/en-data.service.ts ***!
  \*********************************************/
/*! exports provided: EnDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnDataService", function() { return EnDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ "6nsN");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ "5x/H");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/storage */ "Vaw3");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");



// import { AngularFirestore } from '@angular/fire/firestore';
// import * as firebase from 'firebase/app';








let EnDataService = class EnDataService {
    constructor(afAuth, afs, storage) {
        this.afAuth = afAuth;
        this.afs = afs;
        this.storage = storage;
        this.addedUser = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](null);
        this.addedUser$ = this.addedUser.asObservable();
        this.authToken = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](null);
        this.authToken$ = this.authToken.asObservable();
        this.loggedInUserToken = null;
        this.currentUser = null;
        this.afAuth.onAuthStateChanged((user) => {
            //console.log(user);
            if (user != null) {
                this.currentUser = user;
            }
        });
        this.isUploading = false;
        this.isUploaded = false;
        this.imageCollection = afs.collection('freakyImages');
        this.images = this.imageCollection.valueChanges();
        if (localStorage.getItem("currentUser") === null || localStorage.getItem("currentUser") === undefined) {
            this.loggedInUserToken = "";
        }
        else {
            this.loggedInUserToken = localStorage.getItem('currentUser');
        }
        this.authToken.next(this.loggedInUserToken);
    }
    signup({ email, password, nickname, company }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const credential = yield this.afAuth.createUserWithEmailAndPassword(email, password);
            const uid = credential.user.uid;
            return this.afs.doc(`users/${uid}`).set({
                uid,
                email: credential.user.email,
                nickname: nickname,
                company: company,
                id: uid
            });
        });
    }
    signIn({ email, password }) {
        return this.afAuth.signInWithEmailAndPassword(email, password);
    }
    signOut() {
        return this.afAuth.signOut();
    }
    resetPw(email) {
        //return this.afAuth.auth.sendPasswordResetEmail(email);
    }
    getUsers() {
        // console.log(this.currentUser.uid)
        return this.afs.collection('users', ref => ref.where('uid', '!=', this.currentUser.uid)).valueChanges({ idField: 'uid' }).subscribe(data => {
            this.addedUser.next(data);
        });
    }
    getUserForMsg(msgFromId, users) {
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
            return this.afs.collection(`users/${userId}/groups`, ref => ref.orderBy('createdAt')).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(actions => actions.map(a => {
                const data = a.payload.doc.data();
                const user_group_key = a.payload.doc.id;
                return this.getOneGroup(data['id'], user_group_key);
            })));
        }
    }
    getOneGroup(id, user_group_key = null) {
        return this.afs.doc(`groups/${id}`).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(changes => {
            const data = changes.payload.data();
            const group_id = changes.payload.id;
            return Object.assign({ user_group_key, id: group_id }, data);
        }));
    }
    findUser(value) {
        let email = this.afs.collection('users', ref => ref.where('email', '==', value)).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, data };
        })));
        let nickname = this.afs.collection('users', ref => ref.where('nickname', '==', value)).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, data };
        })));
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
        if (!group) {
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
        });
    }
    getChatMessages(groupId) {
        return this.afs.collection(`groups/${groupId}/messages`, ref => ref.orderBy('createdAt')).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return Object.assign({ id }, data);
        })));
    }
    // Chat functionality
    addOneChatMessage(msg, sender_id) {
        return this.afs.collection('messages').add({
            msg: msg,
            sender_id: sender_id,
            from: this.currentUser.uid,
            createdAt: firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].firestore.Timestamp.now()
            // createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
    }
    getOneChatMessages() {
        let users = [];
        return this.getOneUsers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(res => {
            users = res;
            console.log(users);
            return this.afs.collection('messages', ref => ref.orderBy('createdAt')).valueChanges({ idField: 'id' });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(messages => {
            // Get the real name for each user
            for (let m of messages) {
                m.fromName = this.getOneUserForMsg(m.from, users);
                m.myMsg = this.currentUser.uid === m.from;
            }
            return messages;
        }));
    }
    getOneUsers() {
        return this.afs.collection('users').valueChanges({ idField: 'uid' });
    }
    getOneUserForMsg(msgFromId, users) {
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
            });
            let promises = [];
            return Promise.all(promises);
        });
    }
    deleteMessage(gId, msgId) {
        this.afs.collection('groups/' + gId + '/messages').doc(msgId).update({
            delete: true,
            deletedBy: this.currentUser.uid
        });
    }
    uploadFile(event) {
        const file = event.item(0);
        // Validation for Images Only
        if (file.type.split('/')[0] !== 'image') {
            console.error('unsupported file type :( ');
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
        this.snapshot = this.task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(() => {
            // Get uploaded file storage path
            this.UploadedFileURL = fileRef.getDownloadURL();
            this.UploadedFileURL.subscribe(resp => {
                this.addImagetoDB({
                    name: file.name,
                    filepath: resp,
                    size: this.fileSize
                });
                this.isUploading = false;
                this.isUploaded = true;
            }, error => {
                console.error(error);
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(snap => {
            this.fileSize = snap.totalBytes;
        }));
    }
    addImagetoDB(image) {
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
            });
            let promises = [];
            return Promise.all(promises);
        });
    }
};
EnDataService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestore"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorage"] }
];
EnDataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EnDataService);



/***/ })

}]);
//# sourceMappingURL=default~page-en-chat-en-chat-module~page-en-create-room-en-create-room-module~page-en-login-en-login~bdbac243-es2015.js.map