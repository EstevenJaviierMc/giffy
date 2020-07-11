import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GifsListRoutingModule } from './gifs-list-routing.module';
import { SharedModule } from '@app/shared/shared.module';

import { GifsListComponent } from './gifs-list.component';

const components = [GifsListComponent];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    GifsListRoutingModule,
    SharedModule,
  ],
  exports: [...components],
})
export class GifsListsModule {}
