import { Component } from '@angular/core';

@Component({
  selector: 'aa-component',
  template: '<div>AA-COMPONENT</div>',
  styles: [
    'div { background-color: purple; color: white; width: 100%; }',
    ':host { width: 100% }',
  ],
})
export class AAComponent {}
