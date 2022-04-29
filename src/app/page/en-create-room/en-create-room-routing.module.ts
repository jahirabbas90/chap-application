import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnCreateRoomPage } from './en-create-room.page';

const routes: Routes = [
  {
    path: '',
    component: EnCreateRoomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnCreateRoomPageRoutingModule {}
