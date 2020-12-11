import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Baslik } from '../models/baslik';

@Injectable({
  providedIn: 'root'
})
export class BaslikService {

  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };

  getBasliklar() : Observable<Baslik[]> {
    return this.httpClient.get<Baslik[]>("http://localhost:3000/baslik");
  }

  addBaslik(baslik: Baslik) {
    return this.httpClient.post<Baslik>("http://localhost:3000/baslik", baslik, this.httpOptions);
  }

  
}
