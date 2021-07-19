import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnorquestaComponent } from './enorquesta.component';

describe('EnorquestaComponent', () => {
  let component: EnorquestaComponent;
  let fixture: ComponentFixture<EnorquestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnorquestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnorquestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
