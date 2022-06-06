import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  url:string = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json';

  constructor(private http: HttpClient) { }

  getNameOfCountry(){
    return this.http.get(this.url);
  }

  getRatesEur() {
    return this.http.get('https://api.currencyapi.com/v3/latest?apikey=1ARY6tKMdeldHrPgIxADYQFSmZUOF5G4PNrfwn1w&currencies=UAH&base_currency=EUR');
  }

  getRatesUsd() {
    return this.http.get('https://api.currencyapi.com/v3/latest?apikey=1ARY6tKMdeldHrPgIxADYQFSmZUOF5G4PNrfwn1w&currencies=UAH');
  }

  convert(from:any, to:any){
    return this.http.get(`https://api.apilayer.com/fixer/latest?access_key=4XCCJ5KqYbHEv1WktRVOO6N86iTuNeWE&symbols=${from},${to}&format=1`);
  }
}
