import { NgModule } from '@angular/core';
import { StateUiCardComponent } from './components/card/state-ui-card.component';
import { StateUiCardHeaderComponent } from './components/card/state-ui-card-header.component';
import { StateUiCardBodyComponent } from './components/card/state-ui-card-body.component';
import { StateUiCardFooterComponent } from './components/card/state-ui-card-footer.component';
import { StateUiCardPrimaryComponent } from './components/card-primary/state-ui-card-primary.component';
import { StateUiCardInvertedComponent } from './components/card-inverted/state-ui-card-inverted.component';

@NgModule({
  imports: [],
  exports: [
    StateUiCardComponent,
    StateUiCardPrimaryComponent,
    StateUiCardInvertedComponent,
    StateUiCardHeaderComponent,
    StateUiCardBodyComponent,
    StateUiCardFooterComponent
  ],
  declarations: [
    StateUiCardComponent,
    StateUiCardPrimaryComponent,
    StateUiCardInvertedComponent,
    StateUiCardHeaderComponent,
    StateUiCardBodyComponent,
    StateUiCardFooterComponent
  ],
  providers: [],
})
export class StateUiCardModule {
}
