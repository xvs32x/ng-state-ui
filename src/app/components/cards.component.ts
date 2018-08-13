import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  template: `
    <div>
      <div class="demo-title">
        <h3>Card</h3>
        <hr>
        <div fxLayout.xs="column" fxLayout="row" fxLayoutGap=".5rem">
          <state-ui-card-primary fxFlex.xs="100%" fxFlex.lg="calc(33%-2rem)">
            <state-ui-card-header>
              <h4>Primary card</h4>
            </state-ui-card-header>
            <state-ui-card-body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </state-ui-card-body>
            <state-ui-card-footer>
              <input placeholder="Enter your name" type="text" stateUiInput staticState="primary" />
              <button stateUiButton staticState="primary">Send</button>
            </state-ui-card-footer>
          </state-ui-card-primary>
          <state-ui-card-inverted fxFlex.xs="100%" fxFlex.lg="calc(33%-2rem)">
            <state-ui-card-header>
              <h4>Inverted card</h4>
            </state-ui-card-header>
            <state-ui-card-body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </state-ui-card-body>
            <state-ui-card-footer>
              <input placeholder="Enter your name" type="text" stateUiInput staticState="inverted" />
              <button stateUiButton staticState="inverted">Send</button>
            </state-ui-card-footer>
          </state-ui-card-inverted>
          <state-ui-card fxFlex.xs="100%" fxFlex.lg="calc(33%-2rem)">
            <state-ui-card-header>
              <h4>Default card</h4>
            </state-ui-card-header>
            <state-ui-card-body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </state-ui-card-body>
            <state-ui-card-footer>
              <input placeholder="Enter your name" type="text" stateUiInput />
              <button stateUiButton>Send</button>
            </state-ui-card-footer>
          </state-ui-card>
        </div>
      </div>
    </div>
  `
})

export class CardsComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
