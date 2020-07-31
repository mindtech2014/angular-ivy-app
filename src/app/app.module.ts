import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NGMaterialModule } from './material-module/material-module';
import { HeaderComponent } from './header/header.component';
import { SampleComponent } from './sample/sample.component';




@NgModule({
  imports:      [ BrowserModule, FormsModule, NGMaterialModule ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, SampleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
