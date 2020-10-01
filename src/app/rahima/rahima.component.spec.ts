import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RahimaComponent } from './rahima.component';

describe('RahimaComponent', () => {
  let component: RahimaComponent;
  let fixture: ComponentFixture<RahimaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RahimaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RahimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
