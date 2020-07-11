import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '@app/shared/shared.module';
import { GifsListsModule } from '@app/components/gifs-list/gifs-list.module';
import { TrendingModule } from '@app/components/trending-searches/trending.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    GifsListsModule,
    TrendingModule,
  ],
})
export class HomeModule {}
