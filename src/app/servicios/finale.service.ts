import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import edata from '../../assets/data/data.json';
import {Howl, Howler} from 'howler';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinaleService {


  // data: any = [];
  sonido;
  sonidoMismo = ''; // variable creada para chequear en la funcion "reproductor()" si se vuelve a hacer click en el mismo sonido.
  private sonidoPlaying$ = new Subject<[boolean, string]>();

  info = edata;
  constructor(private http: HttpClient) {
    console.log('importado finale service');

    // Realizar algun tipo de validación en caso que no pueda cargarse la información
    /*http.get('../../assets/data/data.json').subscribe( data => {

      this.data = data;
      console.log(this.data);
    });*/
   }

   getCategoria (cat: string) {
     console.log('edata: ', this.info);
     return this.info.find( categoria => categoria.categoria === cat);
   }

   getInstrumento (cat: string, instr: string){
     const temp = this.info.find( data => data.categoria === cat);

     if(temp){
      const instrumentos = temp.instrumentos;
      return instrumentos.find( instrumento => instrumento.nombre === instr);
     }
     else{
      return null;
     }
   }

   // funcion a la cual se le pasa la categoria, instrumento e id de audio para que retorne un objeto con los audios disponibles
   getAudios(categoria, instrumento, idAudio): any {

    let temp = this.info.find( cat => cat.categoria === categoria);
    temp = temp.instrumentos; // asigno el arreglo a buscar

    if(temp){
      temp = temp.find( instr => instr.nombre === instrumento);
      temp = temp.audios;
      if(temp){
        return temp.find( audios => audios.id === idAudio);
      }
    }
    else{
      return [];
    }
  }

  reproductor(urlAudio, nombreAudio){

    if( this.sonidoMismo === urlAudio ){
      if(this.sonido.playing()){
        this.sonido.stop();
        this.sonidoPlaying$.next([false, nombreAudio]);
      }
      else{
        this.sonido.play();
        this.sonidoPlaying$.next([true, nombreAudio]);
      }
    }
    else{
      if (this.sonido){
        if(this.sonido.playing()){
          this.sonido.stop();
        }
        this.sonido.unload();
      }
      this.sonidoMismo = urlAudio;
      this.sonido = new Howl({
        src: [urlAudio],
        html5: true,
        onend: () => {this.sonidoPlaying$.next([false, nombreAudio]);},
        onplay: () => {this.sonidoPlaying$.next([true, nombreAudio]);}
      });

      this.sonido.play();

    }
    }

    getSonidoPlaying$(): Observable<any> {
      return this.sonidoPlaying$.asObservable();
    }

    stopSonido(){
      if(this.sonido){
        if(this.sonido.playing()){
          this.sonido.stop();
        }
      }

    }

}
