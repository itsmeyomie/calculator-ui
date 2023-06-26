import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScientificCalculatorService {

  constructor(private http: HttpClient) { }


  public currencyConversion(currency: number): Observable<number> {
    const url = "http://localhost:8080/currency"
    let params = new HttpParams()
    params = params.set('currency', currency)
    return this.http.get<number>(url, { params });
  }


  public temperatureConversion(value: number): Observable<number> {
    const url = "http://localhost:8080/value"
    let params = new HttpParams()
    params = params.set('value', value)
    return this.http.get<number>(url, { params });
  }
}
