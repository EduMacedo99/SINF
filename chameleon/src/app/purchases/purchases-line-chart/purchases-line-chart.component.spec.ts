import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasesLineChartComponent } from './purchases-line-chart.component';

describe('PurchasesLineChartComponent', () => {
  let component: PurchasesLineChartComponent;
  let fixture: ComponentFixture<PurchasesLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchasesLineChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasesLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
