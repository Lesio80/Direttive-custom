import { Component, Input } from '@angular/core';

@Component({
  selector: 'map-preview-panel',
  template: `
    <div class="abs">
      Map preview of {{ city }}
      <img
        url="'https://www.mapquestapi.com/staticmap/v5/map?key=KpOuvkl4MkrhCTJtg9tKR1JdRqGwYsZG&center='+city+',MA&size=600,400'"
        width="100%"
      />
    </div>
  `,
  styles: [
    `
      .abs {
        background: orange;
        position: absolute;
        padding: 10px;
        top: 0;
        left: 0;
        width: 200px;
        height: 200px;
        pointer-events: none;
      }
    `
  ]
})
export class MapPreviewComponent {
  @Input() city: string;
}
