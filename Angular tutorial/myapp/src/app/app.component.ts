import {Component} from '@angular/core';
import {headerComponent} from './header/app.headerComponent';
import {navComponent} from './nav/app.navComponent';
import {footerComponent} from './footer/app.footerComponent';
import {formComponent} from './form/app.footerComponent';

@Component({
  selector: 'app-root',
  templateUrl: './main.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
