import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SafeHtmlCustomPipe} from './safe-html.pipe';
import {PricePipe} from './price.pipe';


@NgModule({
  declarations: [
    SafeHtmlCustomPipe,
    PricePipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SafeHtmlCustomPipe,
    PricePipe,
  ]
})
export class PipesModule {
}
