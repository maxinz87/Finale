import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FinaleService } from 'src/app/servicios/finale.service';

@Component({
  selector: 'app-partes',
  templateUrl: './partes.component.html',
  styleUrls: ['./partes.component.css']
})
export class PartesComponent implements OnInit {

  partes;
  partesPrincipal;
  instrumento;
  
  constructor(private route: ActivatedRoute,
              private finaleService: FinaleService) {
    this.route.parent.params.subscribe( data => this.instrumento = data);
    this.partes = (this.finaleService.getInstrumento(this.instrumento.categoria, this.instrumento.instrumento)).partes;
    this.partesPrincipal = this.partes.partes;

  }

  ngOnInit(): void {
  }

}
