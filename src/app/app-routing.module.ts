import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
  {
    path: 'group-fullview',
    loadChildren: () => import('./page/group-fullview/group-fullview.module').then( m => m.GroupFullviewPageModule)
  },
  { 
    path: '',
    redirectTo: 'en-login',
    pathMatch: 'full'
  },
  {
    path: 'en-all-rooms',
    loadChildren: () => import('./page/en-all-rooms/en-all-rooms.module').then( m => m.EnAllRoomsPageModule)
  },
  {
    path: 'en-chat/:id',
    loadChildren: () => import('./page/en-chat/en-chat.module').then( m => m.EnChatPageModule)
  },
  {
    path: 'en-login',
    loadChildren: () => import('./page/en-login/en-login.module').then( m => m.EnLoginPageModule)
  },
  {
    path: 'en-create-room',
    loadChildren: () => import('./page/en-create-room/en-create-room.module').then( m => m.EnCreateRoomPageModule)
  },
  {
    path: 'en-register',
    loadChildren: () => import('./page/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'image-upload',
    loadChildren: () => import('./page/image-upload/image-upload.module').then( m => m.ImageUploadPageModule)
  },
  {
    path: 'attachment-upload',
    loadChildren: () => import('./page/attachment-upload/attachment-upload.module').then( m => m.AttachmentUploadPageModule)
  },
  {
    path: 'en-new-individual-chat',
    loadChildren: () => import('./page/en-new-individual-chat/en-new-individual-chat.module').then( m => m.EnNewIndividualChatPageModule)
  },
  {
    path: 'en-one-on-one/:nickname/:id',
    loadChildren: () => import('./page/en-one-on-one/en-one-on-one.module').then( m => m.EnOneOnOnePageModule)
  },
  {
    path: 'file-preview',
    loadChildren: () => import('./page/file-preview/file-preview.module').then( m => m.FilePreviewPageModule)
  },
  {
    path: 'single-user-chat/:chatId',
    loadChildren: () => import('./page/single-user-chat/single-user-chat.module').then( m => m.SingleUserChatPageModule)
  },
  {
    path: 'single-user-chat/:nickname/:id',
    loadChildren: () => import('./page/single-user-chat/single-user-chat.module').then( m => m.SingleUserChatPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
