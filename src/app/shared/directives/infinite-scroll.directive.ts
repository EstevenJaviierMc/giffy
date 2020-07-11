import {
  Directive,
  OnInit,
  Input,
  ElementRef,
  OnDestroy,
} from '@angular/core';

@Directive({
  selector: '[InfiniteScroll]',
})
export class InfiniteScrollDirective
  implements OnInit, OnDestroy {
  private intersectionObserver: IntersectionObserver;

  @Input() scrolled: any;
  @Input() infiniteScrollDistance: number = 2;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.intersectionObserver = new IntersectionObserver(
      this.callback,
      {
        rootMargin: '100px 0px',
      }
    );

    this.intersectionObserver.observe(
      this.el.nativeElement
    );
  }

  ngOnDestroy(): void {
    this.intersectionObserver.unobserve(
      this.el.nativeElement
    );
  }

  private callback: IntersectionObserverCallback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    entries.forEach(({ isIntersecting, target }) => {
      if (isIntersecting) {
        this.scrolled();
      }
    });
  };
}
