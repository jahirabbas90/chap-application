import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnLoginPageRoutingModule } from './en-login-routing.module';

import { EnLoginPage } from './en-login.page';
// import { Push } from '@awesome-cordova-plugins/push';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EnLoginPageRoutingModule,
    // Push
  ],
  declarations: [EnLoginPage]
})
export class EnLoginPageModule {}
