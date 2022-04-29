import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilePreviewPageRoutingModule } from './file-preview-routing.module';

import { FilePreviewPage } from './file-preview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilePreviewPageRoutingModule
  ],
  declarations: [FilePreviewPage]
})
export class FilePreviewPageModule {}
