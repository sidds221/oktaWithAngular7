import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { x: this.http}

  
  getSummary(): Observable<any> {
    return this.http.get('http://localhost:8081/api/summary');
  }

  getFund(fund: any): Observable<any>{
    return this.http.get('http://localhost:8081/api/fund/' + fund);
  }

  getSecurity(sec: any): Observable<any>{
    return this.http.get('http://localhost:8081/api/security/' + sec);
  }

}





