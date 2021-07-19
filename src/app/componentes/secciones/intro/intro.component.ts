import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FinaleService } from '../../../servicios/finale.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  textoIntro;
  instrumento;
  nombreArchivoTxt;
  constructor( private http: HttpClient,
               private route: ActivatedRoute,
               private finaleService: FinaleService) {
    this.route.parent.params.subscribe( data => this.instrumento = data);
    this.nombreArchivoTxt = (this.finaleService.getInstrumento(this.instrumento.categoria, this.instrumento.instrumento)).URLtxtIntro;
    console.log('nombre del archivo: ', this.nombreArchivoTxt);
    this.http.get(`../../../../assets/categorias/${this.instrumento.categoria}/${this.instrumento.instrumento}/txt/${this.nombreArchivoTxt}`,
                  { responseType: 'text' as 'json'}).subscribe( data => this.textoIntro = data);
  }

  ngOnInit(): void {
  }

}
