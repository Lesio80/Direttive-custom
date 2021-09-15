import {
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  HostListener,
  ViewContainerRef
} from '@angular/core';
import { provideRoutes } from '@angular/router';
import { MapPreviewComponent } from '../map-preview.component';

@Directive({
  selector: '[mapPreview]'
})
export class MapPreviewDirective {
  @HostListener('mouseover')
  createMap() {
    const factory = this.resolver.resolveComponentFactory(MapPreviewComponent);
    const componente = this.view.createComponent(factory);
    //RECUPERO IL TESTO DELL'ELEMENTO DOVE STO APPLICANDO LA DIRETTIVA
    const testo = this.el.nativeElement.innerHTML;
    //RENDO UGUALE AL TESTO LA PROPRIETà DEL COMPONENTE INSTANZIATO DALLA DIRETTIVA
    componente.instance.city = testo;
  }

  @HostListener('mouseout')
  deleteMap(){
    this.view.clear();
  }

  constructor(
    private view: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
    private el: ElementRef
  ) {}
}
