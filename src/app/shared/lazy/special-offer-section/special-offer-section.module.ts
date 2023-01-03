import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialOfferSectionComponent } from './special-offer-section.component';



@NgModule({
    declarations: [
        SpecialOfferSectionComponent
    ],
    exports: [
        SpecialOfferSectionComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SpecialOfferSectionModule { }
