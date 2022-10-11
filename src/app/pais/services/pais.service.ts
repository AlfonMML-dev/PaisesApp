import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  
  constructor(private httpClient: HttpClient) { }
  
  buscarPais( termino: string ): Observable<Country[]>{

    const url = ` ${this.apiUrl}/name/${termino}`;
    
    return this.httpClient.get<Country[]>(url).pipe(
      catchError((err)=>{
         
        console.info('Error', err);
        return of([]);   }));
  }

  buscarPaisPorCapital( termino: string ): Observable<Country[]>{

    const url = ` ${this.apiUrl}/capital/${termino}`;
    
    return this.httpClient.get<Country[]>(url).pipe(
      catchError((err)=>{
         
        console.info('Error', err);
        return of([]);   
      }));
  }

  buscarPaisPorRegion( termino: string ): Observable<Country[]>{

    const url = ` ${this.apiUrl}/region/${termino}`;
    
    return this.httpClient.get<Country[]>(url).pipe(
      catchError((err)=>{
         
        console.info('Error', err);
        return of([]);   
      }));
  }

  getPaisPorID( id: number): Observable<Country[]>{
    const url = ` ${this.apiUrl}/alpha/${id}`;
    
    return this.httpClient.get<Country[]>(url).pipe(
      catchError((err)=>{
         
        console.info('Error', err);
        return of([]);   
      }));
  }
}
