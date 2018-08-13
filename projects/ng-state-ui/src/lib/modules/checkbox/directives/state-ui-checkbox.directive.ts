import { Directive, ElementRef } from '@angular/core';
import { StateUi } from '../../../classes/state-ui.class';

@Directive({
  selector: '[stateUiCheckbox]'
})
export class StateUiCheckboxDirective extends StateUi {
  constructor(public el: ElementRef) {
    super(el);
  }
}
