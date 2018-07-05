import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {headerComponent} from './header/app.headerComponent';
import {navComponent} from './nav/app.navComponent';
import {contentAreaComponent} from './contentArea/app.contentAreaComponent';
import {footerComponent} from './footer/app.footerComponent';
import {formComponent} from './form/app.footerComponent';


@NgModule({
  declarations: 
  [
    AppComponent,headerComponent,navComponent,contentAreaComponent,footerComponent,formComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
