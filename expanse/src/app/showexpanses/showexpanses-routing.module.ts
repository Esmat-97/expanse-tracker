import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowexpansesPage } from './showexpanses.page';

const routes: Routes = [
  {
    path: '',
    component: ShowexpansesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowexpansesPageRoutingModule {}
