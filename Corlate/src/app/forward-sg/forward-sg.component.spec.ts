import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForwardSGComponent } from './forward-sg.component';

describe('ForwardSGComponent', () => {
  let component: ForwardSGComponent;
  let fixture: ComponentFixture<ForwardSGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForwardSGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForwardSGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
