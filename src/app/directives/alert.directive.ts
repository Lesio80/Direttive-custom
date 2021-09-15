import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[alert]'
})
export class AlertDirective {
  //QUESTO CON HostBinding CHE PERò VIENE RENDERIZZATO MOLTE VOLTE, PER EVITARE QUESTO USIAMO UN SET
  // @Input() alert: string;
  // @HostBinding() get class() {
  //   return `alert alert-${this.alert}`;
  // }
  @Input() set alert(val: string) {
    //questo codice potrebbe essere soggetto a cross-scripting, per cui è meglio usare Renderer2
    // this.el.nativeElement.classList.add('alert');
    // this.el.nativeElement.classList.add(`alert-${val}`);

    //AGGIUNGO L'ELEMENTO SU CUI APPLICARE LA CLASSE, E POI LA CLASSE CSS, MA POTENDO USARE SOLO UNA CLASSE, LA PRIMA GLIE LA METTO CON HostBinding
    this.renderer.addClass(this.el.nativeElement, `alert-${val}`);
  }
  @HostBinding() class = 'alert';
  constructor(private el: ElementRef, private renderer: Renderer2) {}
}
