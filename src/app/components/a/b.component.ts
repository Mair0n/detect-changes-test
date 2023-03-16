import { Component } from '@angular/core';

@Component({
  selector: 'b-component',
  template: '<div>B-COMPONENT</div><ng-content></ng-content>',
  styles: [
    'div { border: 1px solid yellow; color: black; width: 100%; }',
    ':host { width: 100% }',
  ],
})
export class BComponent {}
