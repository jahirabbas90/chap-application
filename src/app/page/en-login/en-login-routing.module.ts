import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnLoginPage } from './en-login.page';

const routes: Routes = [
  {
    path: '',
    component: EnLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnLoginPageRoutingModule {}
