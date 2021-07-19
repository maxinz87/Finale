import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FinaleService } from '../../servicios/finale.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-instrumento',
  templateUrl: './instrumento.component.html',
  styleUrls: ['./instrumento.component.css']
})
export class InstrumentoComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('menucheckbox') menucheckbox: ElementRef;
  parametrosURL;
  dataInstrumento;
  varLoading = false;
  varPause = false;
  varError = false;
  varPlaying = false;
  sound;
  audiosPrincipal = [];

  constructor( private route: ActivatedRoute,
               private finaleService: FinaleService, private http: HttpClient) {

    this.route.params.subscribe( params => this.parametrosURL = params);
    console.log('parametrosURL', this.parametrosURL);
    this.dataInstrumento = this.finaleService.getInstrumento(this.parametrosURL.categoria, this.parametrosURL.instrumento);
    console.log('data instrumentos', this.dataInstrumento);


    // tslint:disable-next-line:max-line-length
    this.audiosPrincipal = (this.finaleService.getAudios(this.parametrosURL.categoria, this.dataInstrumento.nombre, 'principal')).audios; // obtengo los audios con el id principal del instrumento piccolo en la categoria madera

}

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    console.log("menu checkbox propiedades",);
  }

  clickOpcionMenuDesplegableSecciones(): void{
    if(this.menucheckbox.nativeElement.checked){
      this.menucheckbox.nativeElement.checked = false;
    }
  }
  ngOnDestroy(): void{

  }



}
