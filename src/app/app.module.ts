import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { AlertDirective } from './directives/alert.directive';
import { UrlDirective } from './directives/url.directive';
import { MapPreviewComponent } from './map-preview.component';
import { MapPreviewDirective } from './directives/map-preview.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    MapPreviewComponent,
    HighlightDirective,
    AlertDirective,
    UrlDirective,
    MapPreviewDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
