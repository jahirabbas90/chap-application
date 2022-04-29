import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { EnOneOnOnePageRoutingModule } from './en-one-on-one-routing.module';

import { EnOneOnOnePage } from './en-one-on-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnOneOnOnePageRoutingModule
  ],
  declarations: [EnOneOnOnePage]
})
export class EnOneOnOnePageModule {}
