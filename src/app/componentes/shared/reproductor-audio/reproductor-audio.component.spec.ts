import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReproductorAudioComponent } from './reproductor-audio.component';

describe('ReproductorAudioComponent', () => {
  let component: ReproductorAudioComponent;
  let fixture: ComponentFixture<ReproductorAudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReproductorAudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReproductorAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
