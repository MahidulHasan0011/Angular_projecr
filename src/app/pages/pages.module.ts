import {SwiperModule} from 'swiper/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {PagesComponent} from './pages.component';
import {HeaderModule} from '../core/header/header.module';
import {SharedModule} from '../shared/shared.module';
import {PipesModule} from '../shared/pipes/pipes.module';


@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HeaderModule,
    SwiperModule,
    SharedModule,
    PipesModule,
  ]
})
export class PagesModule {
}
