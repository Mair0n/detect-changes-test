import { Component } from '@angular/core';

@Component({
  selector: 'bb-component',
  template: '<div>BB-COMPONENT</div>',
  styles: [
    'div { background-color: aqua; color: black; width: 100%; }',
    ':host { width: 100% }',
  ],
})
export class ABComponent {}
