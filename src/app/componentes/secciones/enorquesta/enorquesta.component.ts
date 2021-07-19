import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FinaleService } from 'src/app/servicios/finale.service';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-enorquesta',
  templateUrl: './enorquesta.component.html',
  styleUrls: ['./enorquesta.component.css']
})
export class EnorquestaComponent implements OnInit {

  articuloInstrumento = null;
  instrumento;
  enOrquesta;

  constructor(private route: ActivatedRoute,
              private finaleService: FinaleService) {
    this.route.parent.params.subscribe( data => this.instrumento = data);
    this.enOrquesta = (this.finaleService.getInstrumento(this.instrumento.categoria, this.instrumento.instrumento)).enOrquesta;
    console.log("en orquesta",this.enOrquesta);
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
