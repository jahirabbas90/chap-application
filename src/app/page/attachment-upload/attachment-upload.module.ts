import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttachmentUploadPageRoutingModule } from './attachment-upload-routing.module';

import { AttachmentUploadPage } from './attachment-upload.page';
import { FileSizeFormatPipePipe } from '../../pipes/file-size-format-pipe.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttachmentUploadPageRoutingModule
  ],
  declarations: [AttachmentUploadPage, FileSizeFormatPipePipe]
})
export class AttachmentUploadPageModule {}
