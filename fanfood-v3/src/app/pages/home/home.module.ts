import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Home } from './home.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { HomeRoutingModule } from './home-routing.module';
import { BannerComponent } from 'src/app/components/banner/banner.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    HomeRoutingModule,
    ComponentsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [Home, BannerComponent]
})
export class HomePageModule {}
