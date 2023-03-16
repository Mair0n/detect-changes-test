import { Component, VERSION, Inject, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { PRESSED_KEY } from './tokens/pressed-key';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public aaData = 'aaData';
  public bbData = 'bbData';
  public abData = 'abData';

  constructor(
    private cdr: ChangeDetectorRef,
    @Inject(PRESSED_KEY) readonly pressedKey$: Observable<string>
  ) {
    setTimeout(() => {}, 1000);
  }

  onClick(): void {
    console.clear();
    this.cdr.detectChanges();
  }
}
