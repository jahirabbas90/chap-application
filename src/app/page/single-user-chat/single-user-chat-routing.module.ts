import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleUserChatPage } from './single-user-chat.page';

const routes: Routes = [
  {
    path: '',
    component: SingleUserChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleUserChatPageRoutingModule {}
