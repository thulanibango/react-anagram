import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodcategoryPageRoutingModule } from './foodcategory-routing.module';

import { FoodcategoryPage } from './foodcategory.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodcategoryPageRoutingModule, 
    ComponentsModule
    
  ],
  declarations: [FoodcategoryPage]
})
export class FoodcategoryPageModule {}
