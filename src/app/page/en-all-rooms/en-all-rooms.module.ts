import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnAllRoomsPageRoutingModule } from './en-all-rooms-routing.module';

import { EnAllRoomsPage } from './en-all-rooms.page';
import { StarPipe } from './en-all-rooms.page';
import { NotificationPipe } from './en-all-rooms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnAllRoomsPageRoutingModule
  ],
  declarations: [EnAllRoomsPage, StarPipe, NotificationPipe]
})
export class EnAllRoomsPageModule {}
