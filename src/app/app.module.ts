import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BComponent } from './components/b.component';
import { AComponent } from './components/a.component';
import { AAComponent } from './components/aa.component';
import { BBComponent } from './components/bb.component';
import { ABComponent } from './components/ab.component';
import { AAAComponent } from './components/aaa.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    AAComponent,
    BBComponent,
    ABComponent,
    AAAComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
