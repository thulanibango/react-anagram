import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodcategoryPage } from './foodcategory.page';

const routes: Routes = [
  {
    path: '',
    component: FoodcategoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodcategoryPageRoutingModule {}
