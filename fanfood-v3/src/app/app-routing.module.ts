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
    path: 'trucks/:truckId',
    loadChildren: () => import('./pages/tabs/trucks/trucks.module').then( m => m.TrucksPageModule)
  },
  {
    path: 'foodcategory/:menuId',
    loadChildren: () => import('./pages/tabs/foodcategory/foodcategory.module').then( m => m.FoodcategoryPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
