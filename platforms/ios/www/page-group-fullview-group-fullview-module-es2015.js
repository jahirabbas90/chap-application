(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-group-fullview-group-fullview-module"],{

/***/ "2lxV":
/*!**************************************************************!*\
  !*** ./src/app/page/group-fullview/group-fullview.module.ts ***!
  \**************************************************************/
/*! exports provided: GroupFullviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupFullviewPageModule", function() { return GroupFullviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _group_fullview_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./group-fullview-routing.module */ "DUwp");
/* harmony import */ var _group_fullview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./group-fullview.page */ "Pe90");







let GroupFullviewPageModule = class GroupFullviewPageModule {
};
GroupFullviewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _group_fullview_routing_module__WEBPACK_IMPORTED_MODULE_5__["GroupFullviewPageRoutingModule"]
        ],
        declarations: [_group_fullview_page__WEBPACK_IMPORTED_MODULE_6__["GroupFullviewPage"]]
    })
], GroupFullviewPageModule);



/***/ }),

/***/ "DUwp":
/*!**********************************************************************!*\
  !*** ./src/app/page/group-fullview/group-fullview-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: GroupFullviewPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupFullviewPageRoutingModule", function() { return GroupFullviewPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _group_fullview_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./group-fullview.page */ "Pe90");




const routes = [
    {
        path: '',
        component: _group_fullview_page__WEBPACK_IMPORTED_MODULE_3__["GroupFullviewPage"]
    }
];
let GroupFullviewPageRoutingModule = class GroupFullviewPageRoutingModule {
};
GroupFullviewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GroupFullviewPageRoutingModule);



/***/ }),

/***/ "EnSQ":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







let DataService = class DataService {
    constructor(_firestore, toastCtrl, router) {
        this._firestore = _firestore;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.authUser = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.authUser$ = this.authUser.asObservable();
        this.allChatRecords = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.allChatRecords$ = this.allChatRecords.asObservable();
        this.perticularChatDetails = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.perticularChatDetails$ = this.perticularChatDetails.asObservable();
        this.perticularChatMessages = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.perticularChatMessages$ = this.perticularChatMessages.asObservable();
        this.allUsers = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.allUsers$ = this.allUsers.asObservable();
    }
    login(_username, _password) {
        this._firestore.collection('users', ref => ref.where('email', '==', _username).where('password', '==', _password))
            .valueChanges({ idField: 'id' }).subscribe(data => {
            var u = data;
            //console.log(data);
            if (data && data.length) {
                this.authUser.next(u[0]);
                this.getChats(u[0]);
                this.getAllUsers(u[0]);
            }
            else {
                this.showSuccess('error', 'Usernam or password mismatch');
                this.authUser.next(null);
            }
        });
    }
    setUserOnline(id) {
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
    addNewUser() {
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
        const docRef = this._firestore.collection('users');
        docRef.add(val).then(() => {
            this.showSuccess('success', 'User added');
        })
            .catch((error) => {
            console.error("Error writing document: ", error);
            this.showSuccess('error', 'Something went wrong!');
        });
    }
    addGroupChat(auth, group_name, user, members) {
        if (auth) {
            var val = {
                group: true,
                group_name: group_name,
                last_text: "",
                users: user,
                members: members,
                timestamp: new Date().getTime()
            };
            //console.log(val);
            const docRef = this._firestore.collection('chat_rooms');
            docRef.add(val).then((docRef) => {
                // console.log(docRef.id);
            })
                .catch((error) => {
                // console.error("Error writing document: ", error);
                this.showSuccess('error', 'Something went wrong!');
            });
        }
    }
    getChats(auth) {
        if (auth) {
            this._firestore.collection('chat_rooms', ref => ref.where('users', 'array-contains', auth.user_id.toString())).valueChanges({ idField: 'id' })
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
    getAllUsers(auth) {
        if (auth) {
            // console.log( auth.user_id);   
            this._firestore.collection('users', ref => ref.where('user_id', '!=', auth.user_id.toString())).valueChanges({ idField: 'id' })
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
    startChat(auth, rec) {
        if (auth) {
            var user = [auth.user_id, rec.user_id];
            var members = [
                {
                    deleted: false,
                    unread_count: 0,
                    user_id: auth.user_id,
                    user_name: auth.username
                },
                {
                    deleted: false,
                    unread_count: 0,
                    user_id: rec.user_id,
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
            const docRef = this._firestore.collection('chat_rooms');
            return new Promise((resolve, reject) => {
                docRef.add(val).then(res => {
                    this.setChatMembers(res.id, members);
                }, err => reject(err));
            });
        }
    }
    setChatMembers(id, members) {
        this._firestore.collection('chat_rooms/' + id + '/membercol').add({ members });
    }
    getParticularChats(auth, id) {
        if (auth) {
            const docRef = this._firestore.collection('chat_rooms').doc(id).collection('messages', ref => ref
                //.limit(5)
                .orderBy('timestamp', 'asc'));
            this.chatInfo = docRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(actions => actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { id, data };
            }))).subscribe(data => {
                //console.log(data);
                this.perticularChatMessages.next(data);
            });
            const docRefNew = this._firestore.collection('chat_rooms').doc(id);
            docRefNew.snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(action => {
                const data = action.payload.data();
                const id = action.payload.id;
                return { id, data };
            })).subscribe(data => {
                // console.log(data);
                this.perticularChatDetails.next(data);
            });
        }
    }
    addChatMsg(auth, msg, id) {
        if (auth) {
            var val = {
                from: auth.user_id,
                user_name: auth.username,
                text: msg,
                timestamp: new Date().getTime()
            };
            // console.log(id);
            // return ;
            const docRef = this._firestore.collection('chat_rooms').doc(id).collection('messages');
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
    updateChatMembersData(auth, id, members) {
        if (auth) {
            const key = `members`;
            const property = members;
            const docRefN = this._firestore.collection('chat_rooms').doc(id);
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
    showSuccess(type, msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: msg,
                duration: 3000,
                position: 'bottom'
            });
            toast.present();
        });
    }
};
DataService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "Pe90":
/*!************************************************************!*\
  !*** ./src/app/page/group-fullview/group-fullview.page.ts ***!
  \************************************************************/
/*! exports provided: GroupFullviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupFullviewPage", function() { return GroupFullviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_group_fullview_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./group-fullview.page.html */ "Rve1");
/* harmony import */ var _group_fullview_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./group-fullview.page.scss */ "eaRT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/data.service */ "EnSQ");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");









let GroupFullviewPage = class GroupFullviewPage {
    constructor(_firestore, router, route, modalController, _data) {
        this._firestore = _firestore;
        this.router = router;
        this.route = route;
        this.modalController = modalController;
        this._data = _data;
        _data.authUser$.subscribe(data => {
            this._authUser = data;
            if (this._authUser != null) {
            }
            else {
                this.router.navigate(['/login']);
            }
            //console.log(this._authUser);
        });
    }
    ngOnInit() {
        //console.log(this.selected);
        //console.log(this.all_user);
    }
    // createGroup() {
    //   this.router.navigate(['/all-chat']);
    // }
    updateSelected(id, type) {
        if (type == 'userName') {
            var index = this.all_user.findIndex(x => x.data.username == id);
            if (index > -1) {
                if (this.all_user[index].data.checked) {
                    this.all_user[index].data.checked = false;
                    var index = this.selected.indexOf(this.all_user[index].data.username);
                    if (index !== -1) {
                        this.selected.splice(index, 1);
                    }
                }
                else {
                    this.all_user[index].data.checked = true;
                    this.selected.push(this.all_user[index].data.username);
                }
            }
        }
    }
    closeModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let data = { selected: this.selected, all_user: this.all_user };
            yield this.modalController.dismiss(data);
        });
    }
    createGroup() {
        if (this.group_name && this.group_name.trim() && this.selected && this.selected.length) {
            var user = [this._authUser.user_id];
            var members = [
                {
                    deleted: false,
                    unread_count: 0,
                    user_id: this._authUser.user_id,
                    user_name: this._authUser.username
                }
            ];
            for (let index = 0; index < this.all_user.length; index++) {
                if (this.all_user[index].data.checked) {
                    user.push(this.all_user[index].data.user_id);
                    var m = {
                        deleted: false,
                        unread_count: 0,
                        user_id: this.all_user[index].data.user_id,
                        user_name: this.all_user[index].data.username
                    };
                    members.push(m);
                }
            }
            console.log(user);
            this._firestore.collection('chat_rooms', ref => ref.where('users', '==', user)).snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(actions => actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return { id, data };
            }))).subscribe(data => {
                if (data.length) {
                    this._data.showSuccess('error', 'Same group already exsist');
                    this.closeModal();
                }
                else {
                    this._data.addGroupChat(this._authUser, this.group_name, user, members);
                    this.closeModal();
                }
            });
        }
        else {
            this._data.showSuccess('error', 'Something went wrong');
        }
    }
};
GroupFullviewPage.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] }
];
GroupFullviewPage.propDecorators = {
    selected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    all_user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
GroupFullviewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-group-fullview',
        template: _raw_loader_group_fullview_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_group_fullview_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GroupFullviewPage);



/***/ }),

/***/ "Rve1":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/group-fullview/group-fullview.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\" class=\"ion-no-border\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>    \n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"closeModal()\">\n        Back\n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n      Add New Group\n    </ion-title>\n  </ion-toolbar>\n  \n</ion-header>\n\n<ion-router-outlet id=\"main\"></ion-router-outlet>\n\n<ion-content [fullscreen]=\"true\">\n  <form class=\"body-spacing\">\n    <ion-item class=\"form-control ion-no-padding\">\n      <ion-label position=\"floating\">Group Name</ion-label>\n      <ion-input type=\"text\" [(ngModel)]=\"group_name\" name=\"group_name\"></ion-input>\n    </ion-item>\n  </form>\n  <div class=\"body-spacing\">\n    <ion-chip class=\"list-spacing\" *ngFor=\"let u of selected;\">\n      <ion-label>{{u}}</ion-label>\n      <ion-icon name=\"close-circle\" (click)=\"updateSelected(u, 'userName')\"></ion-icon>\n    </ion-chip>\n    \n  </div>\n  <ion-button expand=\"block\" color=\"primary\" class=\"mb15\" mode=\"md\" (click)=\"createGroup()\">Create Group</ion-button>\n</ion-content>\n");

/***/ }),

/***/ "eaRT":
/*!**************************************************************!*\
  !*** ./src/app/page/group-fullview/group-fullview.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".body-spacing {\n  padding: 0 1em;\n}\n.body-spacing .list-spacing {\n  margin-left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2dyb3VwLWZ1bGx2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjtBQUFFO0VBQ0ksY0FBQTtBQUVOIiwiZmlsZSI6Imdyb3VwLWZ1bGx2aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5LXNwYWNpbmd7XHJcbiAgcGFkZGluZzogMCAxZW07XHJcbiAgLmxpc3Qtc3BhY2luZ3tcclxuICAgICAgbWFyZ2luLWxlZnQ6MCA7XHJcbiAgfVxyXG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=page-group-fullview-group-fullview-module-es2015.js.map