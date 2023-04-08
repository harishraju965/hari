import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteFormsComponent } from './remote-forms.component';

describe('RemoteFormsComponent', () => {
  let component: RemoteFormsComponent;
  let fixture: ComponentFixture<RemoteFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoteFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoteFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
