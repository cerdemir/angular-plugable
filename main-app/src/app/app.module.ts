import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { JitCompilerFactory } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { DynamicNavigationComponent } from './components/dynamic-navigation/dynamic-navigation.component';
import { DynamicContentComponent } from './components/dynamic-content/dynamic-content.component';



@NgModule({
  declarations: [
    AppComponent,
    DynamicNavigationComponent,
    DynamicContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
