import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { Stadiums } from './stadiums.page';

describe('Tab2Page', () => {
  let component: Stadiums;
  let fixture: ComponentFixture<Stadiums>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Stadiums],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(Stadiums);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
