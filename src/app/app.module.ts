import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componentes/nav/nav.component';
import { BodyComponent } from './componentes/body/body.component';
import { CategoriaComponent } from './componentes/categoria/categoria.component';
import { InstrumentoComponent } from './componentes/instrumento/instrumento.component';
import { RegynotComponent } from './componentes/secciones/regynot/regynot.component';
import { PartesComponent } from './componentes/secciones/partes/partes.component';
import { ModelosComponent } from './componentes/secciones/modelos/modelos.component';
import { EneltiempoComponent } from './componentes/secciones/eneltiempo/eneltiempo.component';
import { IntroComponent } from './componentes/secciones/intro/intro.component';
import { ReproductorAudioComponent } from './componentes/shared/reproductor-audio/reproductor-audio.component';
import { EnorquestaComponent } from './componentes/secciones/enorquesta/enorquesta.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BodyComponent,
    CategoriaComponent,
    InstrumentoComponent,
    RegynotComponent,
    PartesComponent,
    ModelosComponent,
    EneltiempoComponent,
    IntroComponent,
    ReproductorAudioComponent,
    EnorquestaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
