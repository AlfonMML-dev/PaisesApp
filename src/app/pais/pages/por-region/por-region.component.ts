import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }
  
  `
  ]
})
export class PorRegionComponent {

  placeholder: string = 'pais por region';
  termino: string = ''
  hayError: boolean = false;
  paises: Country[] = [];

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';

  constructor(private paisService: PaisService) { }

  activarRegion( region: string){
    this.regionActiva = region;

    // TODO: llamar al servicio
    this.buscar( region );
  }

  buscar( termino: string){
    
    this.termino = termino;
    
    this.paisService.buscarPaisPorRegion( this.termino )
    // Código de Javi, senior. El error es capturado en el servicio
    .subscribe((paises)=>{
      this.paises = paises;
      this.hayError = this.paises.length==0
    });
    
    // Código de Alfonso, noob
    /* 
      .subscribe({
        next: (paises) => {this.paises = paises; console.log( paises );},
        error: (err) => {
          this.hayError = true; 
          this.paises = [];
          console.log('Error'); 
          console.info(err);
        },        
      }); */              
  }

  sugerencias( termino: string ){
    this.hayError = false;

    // TODO: crear sugerencias
    
  }


}
