import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrucksPage } from './trucks.page';

describe('TrucksPage', () => {
  let component: TrucksPage;
  let fixture: ComponentFixture<TrucksPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TrucksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
