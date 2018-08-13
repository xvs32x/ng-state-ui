import { Directive, ElementRef } from '@angular/core';
import { StateUi } from '../../../classes/state-ui.class';

@Directive({
  selector: '[stateUiInput]'
})
export class StateUiInputDirective extends StateUi {
  constructor(public el: ElementRef) {
    super(el);
    this.el.nativeElement.classList.add('state-ui-input');
  }
}
