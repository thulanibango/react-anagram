import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Stadiums } from './stadiums.page';

const routes: Routes = [
  {
    path: '',
    component: Stadiums,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StadiumsRoutingModule {}
