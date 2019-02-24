import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
    provide: 'component',
    useValue: [{
      component: AppComponent
    }],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
