import {
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'aa-component',
  template: '<div>AA-COMPONENT, data = {{aaData}}</div>',
  styles: [
    'div { border: 1px solid purple; color: black; width: 100%; }',
    ':host { width: 100% }',
  ],
})
export class AAComponent implements OnChanges, DoCheck {
  public aaData;

  constructor(private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.aaData = 'aaData';
      console.log('AAComponent markForCheck');
    }, 2000);
  }

  public ngOnChanges(changes): void {
    console.log('AAComponent ngOnChanges', changes);
  }

  public ngDoCheck(): void {
    console.log('AAComponent ngDoCheck');
  }
}
