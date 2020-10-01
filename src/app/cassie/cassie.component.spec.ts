import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CassieComponent } from './cassie.component';

describe('CassieComponent', () => {
  let component: CassieComponent;
  let fixture: ComponentFixture<CassieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CassieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CassieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
