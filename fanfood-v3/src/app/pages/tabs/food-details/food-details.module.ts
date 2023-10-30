import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodDetailsPageRoutingModule } from './food-details-routing.module';

import { FoodDetailsPage } from './food-details.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodDetailsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FoodDetailsPage]
})
export class FoodDetailsPageModule {}
