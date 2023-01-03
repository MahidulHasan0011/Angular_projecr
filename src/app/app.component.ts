import {Component} from '@angular/core';
import localeBn from '@angular/common/locales/bn';
import {registerLocaleData} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    registerLocaleData(localeBn, 'bn');
  }
}
