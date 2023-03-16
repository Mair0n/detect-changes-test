import { Component } from '@angular/core';

@Component({
  selector: 'aa-component',
  template: '<div>AA-COMPONENT</div>',
  styles: [
    'div { border: 1px solid purple; color: white; width: 100%; }',
    ':host { width: 100% }',
  ],
})
export class AAComponent {}
