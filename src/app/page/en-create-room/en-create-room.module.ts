import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnCreateRoomPageRoutingModule } from './en-create-room-routing.module';

import { EnCreateRoomPage } from './en-create-room.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnCreateRoomPageRoutingModule
  ],
  declarations: [EnCreateRoomPage]
})
export class EnCreateRoomPageModule {}
