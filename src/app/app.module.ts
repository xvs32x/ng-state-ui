import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StateUiButtonModule } from '../../projects/ng-state-ui/src/lib/modules/button/state-ui-button.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StateUiButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
