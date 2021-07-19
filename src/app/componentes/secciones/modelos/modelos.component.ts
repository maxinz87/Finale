import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import { FinaleService } from 'src/app/servicios/finale.service';

SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.css']
})
export class ModelosComponent implements OnInit {

  instrumento;
  modelos;
  infoadicional = undefined;

  constructor(private route: ActivatedRoute,
              private finaleService: FinaleService) {

      this.route.parent.params.subscribe( data => this.instrumento = data);
      this.modelos = (this.finaleService.getInstrumento(this.instrumento.categoria, this.instrumento.instrumento)).modelos;
      this.infoadicional = this.modelos.find( objeto => objeto.infoadicional);
      console.log("infoadicional!",this.infoadicional);
  }

  ngOnInit(): void {

  }

  onSwiper(swiper){
    console.log("dentro de swiper",swiper);
  }
  onSlideChange(){

  }
}
