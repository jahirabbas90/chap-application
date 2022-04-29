import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImageUploadPageRoutingModule } from './image-upload-routing.module';

import { ImageUploadPage } from './image-upload.page';
import { FileSizeFormatPipePipe } from '../../pipes/file-size-format-pipe.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImageUploadPageRoutingModule
  ],
  declarations: [ImageUploadPage, FileSizeFormatPipePipe]
})
export class ImageUploadPageModule {}
