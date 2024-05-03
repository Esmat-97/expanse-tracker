import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowexpansesPageRoutingModule } from './showexpanses-routing.module';

import { ShowexpansesPage } from './showexpanses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowexpansesPageRoutingModule
  ],
  declarations: [ShowexpansesPage]
})
export class ShowexpansesPageModule {}
