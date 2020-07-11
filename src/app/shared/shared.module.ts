import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgLazyDirective } from './directives/img-lazy.directive';
import { InfiniteScrollDirective } from './directives/infinite-scroll.directive';

const exports = [ImgLazyDirective, InfiniteScrollDirective];

@NgModule({
  declarations: [...exports],
  imports: [CommonModule],
  exports: [...exports],
})
export class SharedModule {}
