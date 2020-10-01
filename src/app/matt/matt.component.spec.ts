import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MattComponent } from './matt.component';

describe('MattComponent', () => {
  let component: MattComponent;
  let fixture: ComponentFixture<MattComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MattComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MattComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
