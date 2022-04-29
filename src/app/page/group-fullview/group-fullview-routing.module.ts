import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupFullviewPage } from './group-fullview.page';

const routes: Routes = [
  {
    path: '',
    component: GroupFullviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupFullviewPageRoutingModule {}
