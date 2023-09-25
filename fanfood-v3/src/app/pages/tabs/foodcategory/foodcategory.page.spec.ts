import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FoodcategoryPage } from './foodcategory.page';

describe('FoodcategoryPage', () => {
  let component: FoodcategoryPage;
  let fixture: ComponentFixture<FoodcategoryPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FoodcategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
