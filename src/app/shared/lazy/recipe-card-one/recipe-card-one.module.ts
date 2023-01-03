import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeCardOneComponent } from './recipe-card-one.component';



@NgModule({
  declarations: [
    RecipeCardOneComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [RecipeCardOneComponent]
})
export class RecipeCardOneModule { }
