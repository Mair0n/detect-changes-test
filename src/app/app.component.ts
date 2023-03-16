import { Component, VERSION, Inject } from '@angular/core';
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
  constructor(@Inject(PRESSED_KEY) readonly pressedKey$: Observable<string>) {}
}
