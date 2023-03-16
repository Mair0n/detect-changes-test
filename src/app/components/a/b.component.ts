import { Component } from '@angular/core';

@Component({
  selector: 'b-component',
  template: '<div>B-COMPONENT</div>',
  styles: [
    'div { border: 1px solid yellow; color: red; width: 100%; }',
    ':host { width: 100% }',
  ],
})
export class BComponent {}
