import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { StadiumComponent } from './stadium/stadium.component';
import { LoadingStadiumComponent } from './loading-stadium/loading-stadium.component';
import { EmptyScreenComponent } from './empty-screen/empty-screen.component';
import { SquareblocksComponent } from './squareblocks/squareblocks.component';
import { LoadingTrucksComponent } from './loading-trucks/loading-trucks.component';



@NgModule({
  declarations: [StadiumComponent, LoadingStadiumComponent,EmptyScreenComponent, SquareblocksComponent, LoadingTrucksComponent ],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports:[StadiumComponent, LoadingStadiumComponent, EmptyScreenComponent, SquareblocksComponent, LoadingTrucksComponent]
})
export class ComponentsModule { }
