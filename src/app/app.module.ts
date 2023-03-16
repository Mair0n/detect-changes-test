import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AComponent } from './components/a/a.component';
import { BComponent } from './components/a/b.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, AComponent, BComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
