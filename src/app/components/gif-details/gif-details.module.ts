import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GifDetailsRoutingModule } from './gif-details-routing.module';
import { GifDetailsComponent } from './gif-details.component';


@NgModule({
  declarations: [GifDetailsComponent],
  imports: [
    CommonModule,
    GifDetailsRoutingModule
  ]
})
export class GifDetailsModule { }
