import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppComponent }   from './app.component';
import {
    DxSelectBoxModule,
    DxTextAreaModule,
    DxFormModule
  } from "devextreme-angular";
@NgModule({
    imports:      [ BrowserModule, DxSelectBoxModule, DxTextAreaModule, DxFormModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
