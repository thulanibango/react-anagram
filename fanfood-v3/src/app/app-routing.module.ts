import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'stadium/:stadiumId',
    loadChildren: () => import('./pages/tabs/items/items.module').then( m => m.ItemsPageModule)
  },
  {
    path: 'truck/:truckId',
    loadChildren: () => import('./pages/tabs/trucks/trucks.module').then( m => m.TrucksPageModule)
  },
  {
    path: 'foodcategory/:foodCategory/:foodId',
    loadChildren: () => import('./pages/tabs/foodcategory/foodcategory.module').then( m => m.FoodcategoryPageModule)
  },
  {
    path: 'food-details/:foodId',
    loadChildren: () => import('./pages/tabs/food-details/food-details.module').then( m => m.FoodDetailsPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'food-details',
    loadChildren: () => import('./pages/tabs/food-details/food-details.module').then( m => m.FoodDetailsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
