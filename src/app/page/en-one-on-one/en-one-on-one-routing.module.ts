import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EnOneOnOnePage } from './en-one-on-one.page';

const routes: Routes = [
  {
    path: '',
    component: EnOneOnOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule],
  exports: [RouterModule],
})
export class EnOneOnOnePageRoutingModule {}
