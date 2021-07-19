import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './componentes/body/body.component';
import { CategoriaComponent } from './componentes/categoria/categoria.component';
import { InstrumentoComponent } from './componentes/instrumento/instrumento.component';
import { RegynotComponent } from './componentes/secciones/regynot/regynot.component';
import { PartesComponent } from './componentes/secciones/partes/partes.component';
import { ModelosComponent } from './componentes/secciones/modelos/modelos.component';
import { EneltiempoComponent } from './componentes/secciones/eneltiempo/eneltiempo.component';
import { IntroComponent } from './componentes/secciones/intro/intro.component';
import { EnorquestaComponent } from './componentes/secciones/enorquesta/enorquesta.component';

const routes: Routes = [
  {path: 'inicio', component: BodyComponent},
  {path: 'categoria/:categoria', component: CategoriaComponent},
  {
    path: 'categoria/:categoria/:instrumento',
    component: InstrumentoComponent,
    children: [
      {path: 'intro', component: IntroComponent},
      {path: 'regynot', component: RegynotComponent},
      {path: 'partes', component: PartesComponent},
      {path: 'modelos', component: ModelosComponent},
      {path: 'eneltiempo', component: EneltiempoComponent},
      {path: 'enorquesta', component: EnorquestaComponent},
      {path: '**', pathMatch: 'full', redirectTo: 'intro'}
    ]
  },
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
