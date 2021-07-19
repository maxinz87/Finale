import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { FinaleService } from 'src/app/servicios/finale.service';

@Component({
  selector: 'app-eneltiempo',
  templateUrl: './eneltiempo.component.html',
  styleUrls: ['./eneltiempo.component.css']
})
export class EneltiempoComponent implements OnInit {

  articuloInstrumento = null;
  instrumento;
  nombreArchivoTxt;
  txtEnElTiempo;
  constructor(private route: ActivatedRoute,
              private finaleService: FinaleService,
              private http: HttpClient) {
    this.route.parent.params.subscribe( data => this.instrumento = data);
    this.nombreArchivoTxt = (this.finaleService.getInstrumento(this.instrumento.categoria, this.instrumento.instrumento)).URLeneltiempo;


    this.http.get(`../../../../assets/categorias/${this.instrumento.categoria}/${this.instrumento.instrumento}/txt/${this.nombreArchivoTxt}`,
    { responseType: 'text' as 'json' }).subscribe( data => this.txtEnElTiempo = data);

    console.log(this.txtEnElTiempo);

    const ultimaletra = this.instrumento.instrumento.charAt(this.instrumento.instrumento.length - 1);
    if(ultimaletra === 'a'){
      this.articuloInstrumento = 'La';
    }
    else{
      this.articuloInstrumento = 'El';
    }

}

  ngOnInit(): void {
  }

}
