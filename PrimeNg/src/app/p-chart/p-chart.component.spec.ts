import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PChartComponent } from './p-chart.component';

describe('PChartComponent', () => {
  let component: PChartComponent;
  let fixture: ComponentFixture<PChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
