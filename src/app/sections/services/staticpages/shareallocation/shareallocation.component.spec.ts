import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareallocationComponent } from './shareallocation.component';

describe('ShareallocationComponent', () => {
  let component: ShareallocationComponent;
  let fixture: ComponentFixture<ShareallocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareallocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareallocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
