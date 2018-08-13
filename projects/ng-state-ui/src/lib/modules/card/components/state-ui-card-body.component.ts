import { Component, ElementRef, OnInit } from '@angular/core';
import { StateUi } from '../../../classes/state-ui.class';

@Component({
  selector: 'state-ui-card-body',
  template: `<ng-content></ng-content>`
})

export class StateUiCardBodyComponent extends StateUi implements OnInit {
  constructor(public el: ElementRef) {
    super(el);
    this.el.nativeElement.classList.add('state-ui-card-body');
  }

  ngOnInit() {
  }
}
