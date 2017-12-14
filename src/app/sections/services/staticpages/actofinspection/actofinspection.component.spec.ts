import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActofinspectionComponent } from './actofinspection.component';

describe('ActofinspectionComponent', () => {
  let component: ActofinspectionComponent;
  let fixture: ComponentFixture<ActofinspectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActofinspectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActofinspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
