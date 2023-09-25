import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodcategoryPageRoutingModule } from './foodcategory-routing.module';

import { FoodcategoryPage } from './foodcategory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodcategoryPageRoutingModule
  ],
  declarations: [FoodcategoryPage]
})
export class FoodcategoryPageModule {}
