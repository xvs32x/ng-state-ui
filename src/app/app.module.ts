import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StateUiButtonModule } from '../../projects/ng-state-ui/src/lib/modules/button/state-ui-button.module';
import { ButtonsComponent } from './components/buttons.component';
import { CardsComponent } from './components/cards.component';
import { StateUiCardModule } from '../../projects/ng-state-ui/src/lib/modules/card/state-ui-card.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StateUiInputModule } from '../../projects/ng-state-ui/src/lib/modules/input/state-ui-input.module';
import { FormComponent } from './components/form.component';
import { StateUiCheckboxModule } from '../../projects/ng-state-ui/src/lib/modules/checkbox/state-ui-checkbox.module';
import { StateUiFormBackdropModule } from '../../projects/ng-state-ui/src/lib/modules/form-backdrop/state-ui-form-backdrop.module';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    CardsComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    StateUiButtonModule,
    StateUiCardModule,
    StateUiInputModule,
    StateUiCheckboxModule,
    StateUiFormBackdropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
