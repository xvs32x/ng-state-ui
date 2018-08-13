import { NgModule } from '@angular/core';
import { StateUiCardComponent } from './components/state-ui-card.component';
import { StateUiCardHeaderComponent } from './components/state-ui-card-header.component';
import { StateUiCardBodyComponent } from './components/state-ui-card-body.component';
import { StateUiCardFooterComponent } from './components/state-ui-card-footer.component';

@NgModule({
  imports: [],
  exports: [
    StateUiCardComponent,
    StateUiCardHeaderComponent,
    StateUiCardBodyComponent,
    StateUiCardFooterComponent
  ],
  declarations: [
    StateUiCardComponent,
    StateUiCardHeaderComponent,
    StateUiCardBodyComponent,
    StateUiCardFooterComponent
  ],
  providers: [],
})
export class StateUiCardModule {
}
