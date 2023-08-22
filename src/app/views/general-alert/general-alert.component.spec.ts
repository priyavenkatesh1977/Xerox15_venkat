import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralAlertComponent } from './general-alert.component';

describe('GeneralAlertComponent', () => {
  let component: GeneralAlertComponent;
  let fixture: ComponentFixture<GeneralAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralAlertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
