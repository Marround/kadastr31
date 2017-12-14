import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingmeasureComponent } from './buildingmeasure.component';

describe('BuildingmeasureComponent', () => {
  let component: BuildingmeasureComponent;
  let fixture: ComponentFixture<BuildingmeasureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingmeasureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingmeasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
