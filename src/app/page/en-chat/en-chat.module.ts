import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnChatPageRoutingModule } from './en-chat-routing.module';

import { EnChatPage } from './en-chat.page';
import { HeadingPipe } from '../../pipes/heading.pipe';
import { FileSizeFormatPipePipe } from '../../pipes/file-size-format-pipe.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnChatPageRoutingModule
  ],
  declarations: [EnChatPage, HeadingPipe, FileSizeFormatPipePipe]
})
export class EnChatPageModule {}
