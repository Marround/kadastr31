import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsurveyComponent } from './locationsurvey.component';

describe('LocationsurveyComponent', () => {
  let component: LocationsurveyComponent;
  let fixture: ComponentFixture<LocationsurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationsurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
