import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KaitlynComponent } from './kaitlyn.component';

describe('KaitlynComponent', () => {
  let component: KaitlynComponent;
  let fixture: ComponentFixture<KaitlynComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KaitlynComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KaitlynComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
