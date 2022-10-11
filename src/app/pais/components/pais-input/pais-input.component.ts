import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit{

  @Input() placeholder: string = '';

  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  // DebounceTime
  // Este evento se emite cuando la persona deja de escribir
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  // Con Subject por decirlo de algún modo, podemos crear un observador manualmente
  debouncer: Subject<string> = new Subject();

  termino: string = '';

  constructor() { }  

  // El componente ngOnInit se dispara una única vez, cuando es creado
  ngOnInit() {
    this.debouncer
    .pipe( debounceTime(300) )
    .subscribe({
      next: (valor: any) => {
        console.log('debouncer:', valor);
        this.onDebounce.emit( valor );
      }
    });
  }

  buscar(){
    this.onEnter.emit( this.termino );
  }

  teclaPresionada(){
    this.debouncer.next( this.termino );
    
  }
}
