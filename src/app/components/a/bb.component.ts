import { Component, Input } from '@angular/core';

@Component({
  selector: 'bb-component',
  template: '<div>BB-COMPONENT, data = {{bbData}}</div>',
  styles: [
    'div { border: 1px solid aqua; color: black; width: 100%; }',
    ':host { width: 100% }',
  ],
})
export class BBComponent {
  @Input() public bbData = 'bbData';
}
