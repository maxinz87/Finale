import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FinaleService } from 'src/app/servicios/finale.service';

@Component({
  selector: 'app-regynot',
  templateUrl: './regynot.component.html',
  styleUrls: ['./regynot.component.css']
})
export class RegynotComponent implements OnInit {

  instrumento;
  regynot;
  escalaPiano;
  rango;

  constructor(private route: ActivatedRoute,
              private finaleService: FinaleService) {
    this.route.parent.params.subscribe( data => this.instrumento = data);
    this.regynot = (this.finaleService.getInstrumento(this.instrumento.categoria, this.instrumento.instrumento)).regynot;
    this.escalaPiano = this.regynot.find( data => data.URLescalapiano !== undefined );
    this.rango = this.regynot.find( data => data.URLrango !== undefined );
    console.log("regynot", this.escalaPiano, this.rango);
  }

  ngOnInit(): void {
  }

}
