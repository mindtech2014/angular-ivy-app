import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NGMaterialModule } from './material-module/material-module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';




@NgModule({
  imports:      [ BrowserModule, FormsModule, NGMaterialModule, RouterModule.forChild(AppRoutes) ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent,  SidebarComponent ],
  bootstrap:    [ AppComponent ]
  ,exports:[ RouterModule ]
})
export class AppModule { }
