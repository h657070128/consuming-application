import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ClarityModule } from "clarity-angular";
import { LibModule } from 'quickstart-lib';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule.forRoot(),
    LibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
