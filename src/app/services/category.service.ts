import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Kategori } from '../models/kategori';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  getKategoriler() : Observable<Kategori[]> {
    return this.httpClient.get<Kategori[]>("http://localhost:3000/kategori");
  }
}
