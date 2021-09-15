import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[url]'
})
export class UrlDirective {
  @Input() url: string | null = null;
  @HostListener('click') goTo() {
    window.open(this.url);
  }
  @HostBinding('style.cursor') pointer = 'pointer';
  constructor() {}
}
