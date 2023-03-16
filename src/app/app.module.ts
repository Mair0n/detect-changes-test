import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AComponent } from './components/a/a.component';
import { BComponent } from './components/a/b.component';
import { AAComponent } from './components/a/aa.component';
import { BBComponent } from './components/a/bb.component';
import { ABComponent } from './components/a/ab.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    AAComponent,
    BBComponent,
    ABComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
