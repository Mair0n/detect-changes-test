import {
  ChangeDetectorRef,
  Component,
  DoCheck,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'aaa-component',
  template: '<div>AAA-COMPONENT, data = {{aaaData}}</div>',
  styles: [
    'div { border: 1px solid purple; color: black; width: 100%; }',
    ':host { width: 100% }',
  ],
})
export class AAAComponent implements OnChanges, DoCheck {
  public aaaData;

  constructor(private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.aaaData = 'aaaData';
      this.cdr.markForCheck();
    }, 1000);
  }

  public ngOnChanges(changes): void {
    console.log('AAAComponent ngOnChanges', changes);
  }

  public ngDoCheck(): void {
    console.log('AAAComponent ngDoCheck');
  }
}
