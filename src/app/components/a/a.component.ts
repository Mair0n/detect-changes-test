import { Component } from '@angular/core';

@Component({
  selector: 'a-component',
  template: '<div>A-COMPONENT</div>',
  styles: [
    'div { background-color: blue; color: white; width: 100%; }',
    ':host { width: 100% }',
  ],
})
export class AComponent {}