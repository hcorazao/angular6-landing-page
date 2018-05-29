// Angular
import { Injectable, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  constructor(private http: HttpClient) { }

  getCurrency() {
    let headers: HttpHeaders = new HttpHeaders();
    return this.http.get<any>('http://api.fixer.io/latest?base=USD&symbols=EUR', { headers: headers });
  }

}
