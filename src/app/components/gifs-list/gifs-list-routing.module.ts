import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GifsListComponent } from './gifs-list.component';

const routes: Routes = [
  { path: '', component: GifsListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GifsListRoutingModule {}
