import { Directive, ElementRef } from '@angular/core';
import { StateUi } from '../../../classes/state-ui.class';

@Directive({
  selector: '[stateUiFormBackdrop]'
})
export class StateUiFormBackdropDirective extends StateUi {
  constructor(el: ElementRef) {
    super(el);
    this.el.nativeElement.classList.add('state-ui-form-backdrop');
  }
}
