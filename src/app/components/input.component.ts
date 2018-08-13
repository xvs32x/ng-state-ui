import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  template: `
    <div class="demo-title">
      <h3>Form</h3>
      <hr>
      <div fxLayout.xs="column" fxLayout="row" fxLayoutGap=".5rem">
        <state-ui-card-primary fxFlex.xs="100%" fxFlex.lg="calc(33%-2rem)">
          <input placeholder="Primary" type="text" stateUiInputPrimary />
        </state-ui-card-primary>
        <state-ui-card-inverted fxFlex.xs="100%" fxFlex.lg="calc(33%-2rem)">
          <input placeholder="Inverted" type="text" stateUiInputInverted />
        </state-ui-card-inverted>
        <state-ui-card fxFlex.xs="100%" fxFlex.lg="calc(33%-2rem)">
          <input placeholder="Default" type="text" stateUiInput />
        </state-ui-card>
      </div>
    </div>
  `
})

export class InputComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
