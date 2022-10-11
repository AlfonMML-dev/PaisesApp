import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  placeholder: string = 'pais por capital';
  termino: string = ''
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar( termino: string){
    
    this.termino = termino;
    
    this.paisService.buscarPaisPorCapital( this.termino )
    .subscribe((paises)=>{
      this.paises = paises;
      this.hayError = this.paises.length==0      
    })
      /* .subscribe({
        next: (paises) => {this.paises = paises; console.log( paises );},
        error: (err) => {
          this.hayError = true; 
          this.paises = [];
          console.log('Error'); 
          console.info(err);
        },        
      });    */           
  }

  sugerencias( termino: string ){
    this.hayError = false;

    // TODO: crear sugerencias
    
  }

}
