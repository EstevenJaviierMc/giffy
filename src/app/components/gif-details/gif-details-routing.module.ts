import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GifDetailsComponent } from './gif-details.component';

const routes: Routes = [
  { path: '', component: GifDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GifDetailsRoutingModule {}
