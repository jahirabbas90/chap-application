import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnNewIndividualChatPage } from './en-new-individual-chat.page';

const routes: Routes = [
  {
    path: '',
    component: EnNewIndividualChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnNewIndividualChatPageRoutingModule {}
