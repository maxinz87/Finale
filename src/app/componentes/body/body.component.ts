import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FinaleService} from '../../servicios/finale.service';



@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit, AfterViewInit {

  constructor(private finaleService: FinaleService) { }

  ngOnInit(): void {


  }

  ngAfterViewInit(): void{
    console.log(this.finaleService.getCategoria('madera'));
  }

}
