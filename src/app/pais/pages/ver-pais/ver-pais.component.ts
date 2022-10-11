import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;  

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }  


  ngOnInit(): void {
    
    /* this.activatedRoute.params
      .subscribe({
        //next: (params) => {console.log(params.id);}
        next: ({id}) => {
          console.log(id);

          this.paisService.getPaisPorID( id )
            .subscribe({
              next: pais => {
                console.log(pais);
              }
            })
        }
      }) */

      this.activatedRoute.params
        .pipe(
          //switchMap( (params) => this.paisService.getPaisPorID(params['id'])),          
          switchMap( ({id}) => this.paisService.getPaisPorID(id)),
          tap( resp => console.log('Respuesta obtenida' , resp) )
        )
        .subscribe({
          next: (paises:Country[]) => {
            this.pais = paises[0];            
            console.log('Pais obtenido' , paises);
          }
        });
      
  }

  /* sleep(milliseconds: number): void{
    var start: number = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  } */

}
