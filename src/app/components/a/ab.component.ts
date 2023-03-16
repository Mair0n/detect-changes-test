import { Component } from '@angular/core';

@Component({
  selector: 'ab-component',
  template: '<div>AB-COMPONENT</div>',
  styles: [
    'div { background-color: aqua; color: black; width: 100%; }',
    ':host { width: 100% }',
  ],
})
export class ABComponent {}
