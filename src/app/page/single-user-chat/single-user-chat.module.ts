import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleUserChatPageRoutingModule } from './single-user-chat-routing.module';

import { SingleUserChatPage } from './single-user-chat.page';
import { HeadingPipe } from 'src/app/pipes/heading.pipe';
import { FileSizeFormatPipePipe } from 'src/app/pipes/file-size-format-pipe.pipe';

import { StarPipe } from '../en-all-rooms/en-all-rooms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleUserChatPageRoutingModule
  ],
  declarations: [SingleUserChatPage, HeadingPipe, FileSizeFormatPipePipe, StarPipe]
})
export class SingleUserChatPageModule {}
