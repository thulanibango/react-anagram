import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodcategoryPage } from './foodcategory.page';


const routes: Routes = [
  {
    path: '',
    component: FoodcategoryPage
  },
  {
    path: 'cart',
    loadChildren: () => import('../../../pages/cart/cart.module').then(m => m.CartPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodcategoryPageRoutingModule {}
