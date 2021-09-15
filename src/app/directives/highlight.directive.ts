import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @Input() grassetto: boolean;
  @HostBinding() class = 'highlight';
  @HostBinding('style.font-weight') get boldText() {
    return this.grassetto ? 'bold' : '';
  }

  constructor() {}
}
