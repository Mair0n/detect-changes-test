import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  DoCheck,
  OnChanges,
} from '@angular/core';

const template = `
  <div (click)="onClick()">A-COMPONENT</div>
  <aaa-component><aaa-component>
  <ng-content></ng-content>
`;

@Component({
  selector: 'a-component',
  templateUrl: './a.component.html',
  styles: [
    'div { border: 1px solid blue; color: black; width: 100%; }',
    ':host { width: 100%; }',
  ],
})
export class AComponent
  implements
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  constructor(private cdr: ChangeDetectorRef) {
    setTimeout(() => {
      this.cdr.detectChanges();

      console.log('AComponent detectChanges');
    });
  }

  public ngOnChanges(changes): void {
    console.log('aComponent: ngOnChanges', changes);
  }

  public ngDoCheck(): void {
    console.log('aComponent: DoCheck');
  }

  public ngAfterContentInit(): void {
    console.log('aComponent: AfterContentInit');
  }

  public ngAfterContentChecked(): void {
    console.log('aComponent: AfterContentChecked');
  }

  public ngAfterViewInit(): void {
    console.log('aComponent: AfterViewInit');
  }

  public ngAfterViewChecked(): void {
    console.log('aComponent: AfterViewChecked');
  }

  public onClick(): void {
    console.clear();
    this.cdr.detectChanges();
  }
}
