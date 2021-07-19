import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegynotComponent } from './regynot.component';

describe('RegynotComponent', () => {
  let component: RegynotComponent;
  let fixture: ComponentFixture<RegynotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegynotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegynotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
