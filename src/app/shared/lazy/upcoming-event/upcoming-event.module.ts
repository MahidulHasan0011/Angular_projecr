import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpcomingEventComponent } from './upcoming-event.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UpcomingEventComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    UpcomingEventComponent
  ]
})
export class UpcomingEventModule { }
