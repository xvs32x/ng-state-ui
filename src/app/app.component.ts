import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <button stateUiButton>Default</button>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
