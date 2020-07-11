import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TrendingSearchesComponent } from './trending-searches.component';

@NgModule({
  declarations: [TrendingSearchesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: TrendingSearchesComponent },
    ]),
  ],
  exports: [TrendingSearchesComponent],
})
export class TrendingModule {}
