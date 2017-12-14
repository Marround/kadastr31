import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalplanComponent } from './technicalplan.component';

describe('TechnicalplanComponent', () => {
  let component: TechnicalplanComponent;
  let fixture: ComponentFixture<TechnicalplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
