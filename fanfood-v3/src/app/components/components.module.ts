import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { StadiumComponent } from './stadium/stadium.component';
import { LoadingStadiumComponent } from './loading-stadium/loading-stadium.component';
import { EmptyScreenComponent } from './empty-screen/empty-screen.component';



@NgModule({
  declarations: [StadiumComponent, LoadingStadiumComponent,EmptyScreenComponent],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports:[StadiumComponent, LoadingStadiumComponent, EmptyScreenComponent]
})
export class ComponentsModule { }
