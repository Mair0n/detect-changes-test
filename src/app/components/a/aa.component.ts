import { Component, Input } from '@angular/core';

@Component({
  selector: 'aa-component',
  template: '<div>AA-COMPONENT, data = {{aaData}}</div>',
  styles: [
    'div { border: 1px solid purple; color: black; width: 100%; }',
    ':host { width: 100% }',
  ],
})
export class AAComponent {
  @Input() public aaData = 'aaData';
}
