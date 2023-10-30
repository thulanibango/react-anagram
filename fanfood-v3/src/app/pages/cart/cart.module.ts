import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartPageRoutingModule } from './cart-routing.module';

import { CartPage } from './cart.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { CartListComponent } from 'src/app/components/cart-list/cart-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CartPage, CartListComponent]
})
export class CartPageModule {}
