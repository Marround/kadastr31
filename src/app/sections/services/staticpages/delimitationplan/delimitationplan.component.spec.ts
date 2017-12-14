import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelimitationplanComponent } from './delimitationplan.component';

describe('DelimitationplanComponent', () => {
  let component: DelimitationplanComponent;
  let fixture: ComponentFixture<DelimitationplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelimitationplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelimitationplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
