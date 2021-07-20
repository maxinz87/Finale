import { AfterViewInit, Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FinaleService} from '../../servicios/finale.service';
declare var ScrollReveal;


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit, AfterViewInit {

  @ViewChild('div') div: ElementRef;

  constructor(private finaleService: FinaleService) { }

  ngOnInit(): void {


  }

  ngAfterViewInit(): void{
    console.log(this.finaleService.getCategoria('madera'));

    ScrollReveal().reveal([this.div.nativeElement], {
      duration: 2000
    });
  }

}
