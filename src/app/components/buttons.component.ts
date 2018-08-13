import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
    <div>
      <div class="demo-title">
        <h3>Button</h3>
        <hr>
      </div>
      <div fxLayout="row" fxLayoutGap=".5rem">
        <button stateUiButton staticState="primary">Primary</button>
        <button stateUiButton staticState="inverted">Inverted</button>
        <button stateUiButton>Default</button>
      </div>
     
    </div>
  `
})

export class ButtonsComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
