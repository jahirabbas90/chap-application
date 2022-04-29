import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttachmentUploadPage } from './attachment-upload.page';

const routes: Routes = [
  {
    path: '',
    component: AttachmentUploadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttachmentUploadPageRoutingModule {}
