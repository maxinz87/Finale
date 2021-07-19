import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { FinaleService} from '../../servicios/finale.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit, AfterViewInit {

  @ViewChild('nombreInstruMenu') nombreInstruMenu: ElementRef;

   instrumentos: any = [];
   categoria = ''; //recibe el parametro de la URL, en este caso es la categoria a la cual se ingresó en la pagina de inicio

  //editar y acomodar las variables y el acceso a los datos que vienen por la URL
  constructor(private activateRoute: ActivatedRoute,
              private finaleService: FinaleService,
              private renderer: Renderer2) {
    this.activateRoute.params.subscribe( params => this.categoria = params['categoria']);

    this.instrumentos = (this.finaleService.getCategoria(this.categoria));
    console.log(this.instrumentos);
  }

  ngOnInit(): void {
    console.log(this.instrumentos);
  }

  ngAfterViewInit(): void{
    console.log(this.nombreInstruMenu.nativeElement);
  }

  funcionA(index){
    //this.nombreInstruMenu.nativeElement.style.background = "black";
    let elemento = document.getElementById('span' + index);
    this.renderer.addClass(elemento, 'claseagregada');
    this.renderer.removeClass(elemento, 'claseagregada2');
    //console.log(elemento.className);
    //elemento.className = elemento.className + ' claseagregada';
    //console.log(elemento.classList);
  }
  funcion(index){
    let elemento = document.getElementById('span' + index);
    this.renderer.addClass(elemento, 'claseagregada2');
    this.renderer.removeClass(elemento, 'claseagregada');
  }
}
