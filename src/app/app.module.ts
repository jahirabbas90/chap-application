import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';

//import { AngularFireModule } from 'angularfire2';
//import { AngularFirestoreModule } from 'angularfire2/firestore';
import { firebaseConfig } from './credentials';
// import { FileSizeFormatPipePipe } from './pipes/file-size-format-pipe.pipe';
//import { HeadingPipe } from './pipes/heading.pipe';
import { Camera } from '@ionic-native/camera/ngx';
// import { FCM } from '@ionic-native/fcm/ngx';
import { FCM } from 'cordova-plugin-fcm-with-dependecy-updated/ionic/ngx';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule ,
    HttpClientModule
  ],
  providers: [Camera,DatePipe,FCM, AngularFireStorage,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
