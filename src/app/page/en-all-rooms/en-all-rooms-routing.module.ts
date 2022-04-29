import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnAllRoomsPage } from './en-all-rooms.page';

const routes: Routes = [
  {
    path: '',
    component: EnAllRoomsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnAllRoomsPageRoutingModule {}
