import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Baslik } from '../models/baslik';

@Injectable({
  providedIn: 'root'
})
export class BaslikService {

  constructor(private httpClient: HttpClient) { }

  getBasliklar() : Observable<Baslik[]> {
    return this.httpClient.get<Baslik[]>("http://localhost:3000/baslik");
  }

  
}
