import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Stadiums } from './stadiums.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { StadiumsRoutingModule } from './stadiums-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    StadiumsRoutingModule,
    ComponentsModule
  ],
  declarations: [Stadiums]
})
export class StadiumsPageModule {}
