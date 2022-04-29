import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnNewIndividualChatPageRoutingModule } from './en-new-individual-chat-routing.module';

import { EnNewIndividualChatPage } from './en-new-individual-chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnNewIndividualChatPageRoutingModule
  ],
  declarations: [EnNewIndividualChatPage]
})
export class EnNewIndividualChatPageModule {}
