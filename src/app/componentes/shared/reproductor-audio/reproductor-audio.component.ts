import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import {Howl, Howler} from 'howler';
import { FinaleService } from 'src/app/servicios/finale.service';


@Component({
  selector: 'app-reproductor-audio',
  templateUrl: './reproductor-audio.component.html',
  styleUrls: ['./reproductor-audio.component.css']
})
export class ReproductorAudioComponent implements OnInit, OnDestroy {

  @Input() categoria: string;
  @Input() instrumento: string;
  @Input() nombreAudio: string;

  playing$;
  playing: boolean = false;
  sonido;
  sonido1;
  sonido2;
  constructor(private finaleService: FinaleService) { 
  }

  ngOnInit(): void {
    console.log("dentro del componente reproductor-audio",this.categoria,this.instrumento,this.nombreAudio);
    this.sonido = new Howl({
      src: [`../../../../assets/categorias/${this.categoria}/${this.instrumento}/audio/${this.nombreAudio}`],
      html5: true,
      onend: () => {this.playing = false; console.log("end!");}
    });

    this.playing$ = this.finaleService.getSonidoPlaying$().subscribe( data => {
        if(data[0] === true && data[1] === this.nombreAudio ){
          this.playing = true;
        }
        else{
          this.playing = false;
        }
    });

    console.log(`../../../../assets/categorias/${this.categoria}/${this.instrumento}/audio/${this.nombreAudio}`);
  }

  ngOnDestroy(): void{
    this.playing$.unsubscribe();
    this.finaleService.stopSonido();
  }

  reproducir(): any {

    if(this.playing){
      this.sonido.stop();
      this.playing = false;
    }
    else{
      this.sonido.play();
      this.playing = true;
    }
  }


  reproductorServicio(){
    this.finaleService.reproductor(`../../../../assets/categorias/${this.categoria}/${this.instrumento}/audio/${this.nombreAudio}`, this.nombreAudio);
  }
}
