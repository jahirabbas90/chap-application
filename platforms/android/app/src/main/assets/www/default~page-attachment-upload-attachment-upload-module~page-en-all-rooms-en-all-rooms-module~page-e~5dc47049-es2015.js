(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~page-attachment-upload-attachment-upload-module~page-en-all-rooms-en-all-rooms-module~page-e~5dc47049"],{

/***/ "wxrH":
/*!**************************************************!*\
  !*** ./src/app/services/my-connecter.service.ts ***!
  \**************************************************/
/*! exports provided: MyConnecterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyConnecterService", function() { return MyConnecterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




// import { AngularFirestoreCollection } from 'angularfire2/firestore';
// import { AngularFireDatabase } from 'angularfire2/database';




let MyConnecterService = class MyConnecterService {
    constructor(httpClient, afs, toastCtrl, router) {
        this.httpClient = httpClient;
        this.afs = afs;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.authUser = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.authUser$ = this.authUser.asObservable();
        this.loggedInUser = {};
        this.allUser = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.allUser$ = this.allUser.asObservable();
        this.oldChats = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.oldChats$ = this.oldChats.asObservable();
        this.currentChat = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.currentChat$ = this.currentChat.asObservable();
        this.REST_API_SERVER_URL = "https://networkdemo.in/firebase.php?token=";
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        /*Auth*/
        if (localStorage.getItem("chat-user") === null || localStorage.getItem("chat-user") === undefined) { }
        else {
            this.loggedInUser = JSON.parse(localStorage.getItem('chat-user'));
        }
        this.authUser.next(this.loggedInUser);
        this.oldChats.next([]);
    }
    userLogin(_username, _password) {
        this.afs.collection('employee', ref => ref.where('email', '==', _username).where('password', '==', _password))
            .valueChanges({ idField: 'id' }).subscribe(data => {
            var u = data;
            // console.log(data);
            if (data && data.length) {
                this.loggedInUser = data[0];
                localStorage.setItem('chat-user', JSON.stringify(this.loggedInUser));
                this.authUser.next(this.loggedInUser);
                this.userId = data[0]['uid'];
                localStorage.setItem("userId", this.userId);
                localStorage.setItem("userFriends", data[0]['personal_chats']);
            }
            else {
                this.presentToast('Credential Mismatch');
            }
        });
    }
    presentToast(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: msg,
                duration: 2000
            });
            toast.present();
        });
    }
    removeAuth() {
        var data = {};
        localStorage.removeItem('chat-user');
        this.authUser.next(data);
    }
    getGroups(id) {
        // eturn this.firestore.collection('employee', ref => ref.orderBy('name', 'desc')).snapshotChanges();
        const collection = this.afs.collection(`employee/${id}/groups`, ref => ref
            .orderBy('ceatedAt', 'desc'));
        return collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const user_group_key = a.payload.doc.id;
            // console.log("user_group_key :" +user_group_key )
            // console.log("all-rooms-data :" + JSON.stringify(data))
            return this.getOneGroup(data['chatId'], user_group_key);
        })));
        // this.afs.collection(`employee/${id}/groups`).valueChanges({ idField: 'id' }).subscribe( data => {
        //   var u: any = data;
        //   console.log(data);
        //   // if(data && data.length) {
        //   //   this.loggedInUser = data[0];
        //   //   localStorage.setItem('chat-user', JSON.stringify(this.loggedInUser));
        //   //   this.authUser.next(this.loggedInUser);
        //   // }
        //   // else {
        //   //   this.presentToast('Credential Mismatch');
        //   // }
        // });
    }
    getOneGroup(id, user_group_key = null) {
        return this.afs.doc(`conversations/${id}`).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(changes => {
            const data = changes.payload.data();
            const group_id = changes.payload.id;
            return Object.assign({ user_group_key, id: group_id }, data);
        }));
    }
    fetchChats(id) {
        this.afs.collection(`conversations/${id}/messages`, ref => ref
            .orderBy('createAt', 'asc'))
            .valueChanges({ idField: 'id' }).subscribe(data => {
            if (data && data.length) {
                this.oldChats.next(data);
            }
            else {
                this.oldChats.next([]);
            }
        });
        this.afs.collection('conversations').doc(id)
            .valueChanges({ idField: 'id' }).subscribe(data => {
            this.currentChat.next(data);
        });
    }
    fetchUsers(email) {
        this.afs.collection('employee', ref => ref.where('email', '!=', email))
            .valueChanges({ idField: 'id' }).subscribe(data => {
            if (data && data.length) {
                const resultArray = Object.keys(data).map(index => {
                    let person = data[index];
                    return person;
                });
                // console.log(resultArray);
                this.allUser.next(resultArray);
            }
        });
    }
    createNewChat(val, id1, arr1, id2, arr2) {
        var members = [];
        return new Promise((resolve, reject) => {
            this.afs.collection('conversations').add(val).then(res => {
                var nwAr = {
                    chat_id: res.id,
                    uid: id2
                };
                arr1.push(nwAr);
                var nwAr2 = {
                    chat_id: res.id,
                    uid: id1
                };
                arr2.push(nwAr2);
                this.updateUserChatDat1(res.id, id1, arr1);
                this.updateUserChatDat2(res.id, id2, arr2, res);
            }, err => reject(err));
        });
    }
    updateUserChatDat1(chatId, id, arr) {
        this.afs.doc(`employee/${id}`).update({ personal_chats: arr });
        this.afs.collection(`employee/${id}/groups`).add({ chatId });
    }
    updateUserChatDat2(chatId, id, arr, res) {
        this.afs.doc(`employee/${id}`).update({ personal_chats: arr });
        this.afs.collection(`employee/${id}/groups`).add({ chatId });
        this.gotToPage(res);
    }
    gotToPage(res) {
        setTimeout(() => this.router.navigate([`/single-user-chat/${res.id}`]), 2500); // 2000 is millisecond
    }
    delay(ms, res) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => this.router.navigate([`/single-user-chat/${res.id}`]));
        });
    }
    createNewChatGroup(val, users) {
        var members = [];
        return new Promise((resolve, reject) => {
            this.afs.collection('conversations').add(val).then(res => {
                for (let index = 0; index < users.length; index++) {
                    this.updateUserChatGroup(res.id, users[index]);
                }
                this.router.navigate([`/single-user-chat/${res.id}`]);
            }, err => reject(err));
        });
    }
    updateUserChatGroup(chatId, id) {
        this.afs.collection(`employee/${id}/groups`).add({ chatId: chatId, ceatedAt: new Date().getTime() });
    }
    deleteMessage(cId, msgId) {
        /* this.afs.collection('conversations/' + cId + '/messages').doc(msgId).update({
          delete: true,
          deletedBy: this.userId
        }) */
        this.afs.doc(`conversations/${cId}/messages/${msgId}`).update({
            delete: true
        });
    }
    updateLastMessage(id, lastMsg) {
        this.afs.doc(`conversations/${id}`).update({ last_message: lastMsg });
    }
    createNewUser(val, email) {
        this.afs.collection('employee', ref => ref.where('email', '==', email))
            .valueChanges({ idField: 'id' }).subscribe(data => {
            // console.log(data)
            if (data && data.length) {
                this.router.navigate([`/en-login/`]);
            }
            else {
                this.presentToast('User added');
                this.afs.collection(`employee`).add(val);
                this.router.navigate([`/en-login/`]);
            }
        });
    }
    createNewMessage(val, id, lastMsg, ceatedAt, authuserId, msgCount, msgBy, visible_user_array) {
        var members = [];
        return new Promise((resolve, reject) => {
            this.afs.collection(`/conversations/${id}/messages`).add(val).then(res => {
                // console.log("msgId : "+JSON.stringify(res))     
                this.afs.doc(`conversations/${id}`).update({ last_message: lastMsg, message_count: msgCount, message_by_name: msgBy, ceatedAt: new Date().getTime() });
                this.afs.collection(`employee/${authuserId}/groups`, ref => ref.where('chatId', '==', id)).get().subscribe((querySnap) => {
                    querySnap.forEach((doc) => {
                        // console.log(doc.id)
                        this.afs.doc(`employee/${authuserId}/groups/${doc.id}`).update({ ceatedAt: new Date().getTime() });
                        this.afs.doc(`conversations/${id}`).update({ visible_name: visible_user_array });
                    });
                    console.log(querySnap.docs);
                });
            }, err => reject(err));
        });
    }
    updateUserFcmToken(id, token) {
        this.afs.doc(`employee/${id}`).update({ fcm_token: token });
    }
    messageSeenBy(id, visible_user_array) {
        this.afs.doc(`conversations/${id}`).update({ visible_name: visible_user_array });
    }
    sendFirebasePush(token) {
        return this.httpClient.get(this.REST_API_SERVER_URL + token, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
        // https://networkdemo.in/firebase.php?token=eEmXPgp1RSeTDYCKpUyGAA:APA91bFq4aNYQA9qtXoKacstxeF6ayi8OeAscc8mE-Lwyz6uQb43gYfYc4Fnr6aOi0hI4VASMskiSVleJ_IVpF-xkoXJd5lMucViHfyeOIJBAzc9Eps9gKmhwvQe4DnEGtWuvd14jrmf
    }
    handleError(error) {
        var msg = 'Something bad happened; please try again later.';
        if (error.error instanceof ErrorEvent) {
            msg = error.message ? error.message : error.error.message;
        }
        else {
            msg = error.statusText;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(msg);
    }
    copycreateNewMessage(val, id, lastMsg) {
        var members = [];
        const msgId = this.afs.createId();
        return new Promise((resolve, reject) => {
            this.afs.collection(`/conversations/${id}/messages`).doc(msgId).set(val).then(res => {
                this.afs.doc(`conversations/${id}`).update({ last_message: lastMsg });
                val.users.forEach(element => {
                    this.updateTimeOnChat(element.uid, msgId, Date.now());
                });
            }, err => reject(err));
        });
    }
    updateTimeOnChat(id, groupId, time) {
        console.log("begin_groupid ", groupId);
        /*  return new Promise<any>((resolve, reject) => {
           this.afs.doc(`employee/${id}/groups`).update({ updated_at: time });
         }); */
        const collection = this.afs.collection(`employee/${id}/groups`);
        return collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(actions => actions.map(a => {
            // console.log("groupId", a.payload.doc.id)
            const data = a.payload.doc.data();
            return Object.assign({ id: a.payload.doc.id }, data);
        })))
            .subscribe(res => {
            console.log("inside_subs : ", res);
            const groupInfo = res.find((data) => data.chatId === groupId);
            if (groupInfo) {
                console.log("groupId : " + groupInfo.id);
                return this.afs.doc(`employee/${id}/groups/${groupInfo.id}`).update({ chatupdated_at: time })
                    .then(res => { })
                    .catch(err => { console.log("Error while update time on chat" + err); });
            }
        });
    }
};
MyConnecterService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
MyConnecterService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MyConnecterService);



/***/ })

}]);
//# sourceMappingURL=default~page-attachment-upload-attachment-upload-module~page-en-all-rooms-en-all-rooms-module~page-e~5dc47049-es2015.js.map