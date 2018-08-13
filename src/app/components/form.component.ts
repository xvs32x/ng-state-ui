import { Component, OnInit } from '@angular/core';
import { CheckboxValueInterface } from '../../../projects/ng-state-ui/src/lib/modules/checkbox/interfaces/checkbox-value.interface';

@Component({
  selector: 'app-form',
  template: `
    <div class="demo-title">
      <h3>Form</h3>
      <hr>
      <div>
        <state-ui-card staticState="primary">
          <state-ui-card-body fxLayout="column" fxLayoutGap=".5rem">
            <div fxLayout="row" fxLayout.xs="column">
              <label ngClass.xs="is-top" class="is-right" fxFlex="20%">Username:</label>
              <input fxFlex="67%" placeholder="Enter username" type="text" stateUiInput staticState="primary"/>
            </div>
            <div fxLayout="row" fxLayout.xs="column">
              <label ngClass.xs="is-top" class="is-right" fxFlex="20%">Password:</label>
              <input fxFlex="67%" placeholder="Enter password" type="password" stateUiInput staticState="primary"/>
            </div>
            <div fxLayout="row" fxLayout.xs="column">
              <label ngClass.xs="is-top" class="is-right" fxFlex="20%">Advanced:</label>
              <div fxFlex="67%" stateUiFormBackdrop staticState="primary"></div>
            </div>
          </state-ui-card-body>
        </state-ui-card>
      </div>
    </div>
  `
})

export class FormComponent implements OnInit {
  checkboxOptions: CheckboxValueInterface[] = [
    {
      name: 'option-1',
      label: 'Option 1'
    },
    {
      name: 'option-2',
      label: 'Option 2'
    },
    {
      name: 'option-3',
      label: 'Option 3'
    }
  ];
  constructor() {
  }

  ngOnInit() {
  }
}
