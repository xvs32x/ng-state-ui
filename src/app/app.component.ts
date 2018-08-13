import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div fxLayout="column" fxLayoutGap="1rem">
      <app-buttons></app-buttons>
      <app-cards></app-cards>
      <app-input></app-input>
    </div>
    <!--<router-outlet></router-outlet>-->
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
