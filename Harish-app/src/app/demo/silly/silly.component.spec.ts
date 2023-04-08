import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SillyComponent } from './silly.component';

describe('SillyComponent', () => {
  let component: SillyComponent;
  let fixture: ComponentFixture<SillyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SillyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SillyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
