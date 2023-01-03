import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {SwiperModule} from 'swiper/angular';
import {RecipeCardOneModule} from '../../shared/lazy/recipe-card-one/recipe-card-one.module';
import {SpecialOfferSectionModule} from '../../shared/lazy/special-offer-section/special-offer-section.module';
import { MaterialModule } from 'src/app/material/material.module';
import { UpcomingEventModule } from 'src/app/shared/lazy/upcoming-event/upcoming-event.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SwiperModule,
    RecipeCardOneModule,
    SpecialOfferSectionModule,
    UpcomingEventModule,


    MaterialModule,
  ],
})
export class HomeModule {
}
