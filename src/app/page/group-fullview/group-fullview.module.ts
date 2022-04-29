import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroupFullviewPageRoutingModule } from './group-fullview-routing.module';

import { GroupFullviewPage } from './group-fullview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupFullviewPageRoutingModule
  ],
  declarations: [GroupFullviewPage]
})
export class GroupFullviewPageModule {}
