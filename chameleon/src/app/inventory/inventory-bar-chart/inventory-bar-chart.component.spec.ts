import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryBarChartComponent } from './inventory-bar-chart.component';

describe('InventoryBarChartComponent', () => {
  let component: InventoryBarChartComponent;
  let fixture: ComponentFixture<InventoryBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryBarChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
