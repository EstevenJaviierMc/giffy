import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchResultsRoutingModule } from './search-results-routing.module';
import { SearchResultsComponent } from './search-results.component';
import { GifsListsModule } from '@app/components/gifs-list/gifs-list.module';

@NgModule({
  declarations: [SearchResultsComponent],
  imports: [
    CommonModule,
    SearchResultsRoutingModule,
    GifsListsModule,
  ],
})
export class SearchResultsModule {}
