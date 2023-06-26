import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private http: HttpClient) { }

  public add(numOne: number, numTwo: number): Observable<number> {
    const url = "http://localhost:8080/add"
    let params = new HttpParams()
    params = params.set('numOne', numOne)
    params = params.set('numTwo', numTwo)
    
    return this.http.get<number>(url,{params})
  }
  public subtract(numOne: number, numTwo: number): Observable<number> {
    const url = "http://localhost:8080/subtract"
    let params = new HttpParams()
    params = params.set('numOne', numOne)
    params = params.set('numTwo', numTwo)
    return this.http.get<number>(url,{params})
  }

  public divide(numOne: number, numTwo: number): Observable<number> {
    const url = "http://localhost:8080/divide"
    let params = new HttpParams()
    params = params.set('numOne', numOne)
    params = params.set('numTwo', numTwo)
    return this.http.get<number>(url,{params})
  }
  public multiply(numOne: number, numTwo: number): Observable<number> {
    const url = "http://localhost:8080/multiply"
    let params = new HttpParams()
    params = params.set('numOne', numOne)
    params = params.set('numTwo', numTwo)
    return this.http.get<number>(url,{params})
  }

}

