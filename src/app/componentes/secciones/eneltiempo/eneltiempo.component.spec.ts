import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EneltiempoComponent } from './eneltiempo.component';

describe('EneltiempoComponent', () => {
  let component: EneltiempoComponent;
  let fixture: ComponentFixture<EneltiempoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EneltiempoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EneltiempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
