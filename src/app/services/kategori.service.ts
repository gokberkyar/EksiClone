import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Kategori } from '../models/kategori';

@Injectable({
  providedIn: 'root'
})
export class KategoriService {
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  readonly baseUrl:string = "http://localhost:3000/kategori";

  kategori:Kategori;
  kategoriler:Kategori[];

  
  constructor(private httpClient: HttpClient) { }

  kategorileriDoldur() {
    return this.httpClient
    .get<Kategori[]>(this.baseUrl)
    .toPromise()
    .then( response => 
              this.kategoriler = response as Kategori[]
         );

  }

}
