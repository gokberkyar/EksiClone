import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Baslik } from '../models/baslik';

@Injectable({
  providedIn: 'root'
})
export class BaslikService {
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  readonly baseUrl:string = "http://localhost:3000/baslik";

  baslik:Baslik;
  basliklar:Baslik[];

  private kategoriId:number = null;

  constructor(private httpClient: HttpClient) { 
    this.emptyBaslik();
  }

  emptyBaslik(){
    this.baslik =  {id:null, title:"", kategoriId:null};
  }

  basliklariDoldur(kategoriId?:number){
    let url:string = this.baseUrl;

    if (kategoriId != null){
      this.kategoriId = kategoriId;
      url += "?kategoriId=" + kategoriId;
    }

    return this.httpClient
          .get<Baslik[]>(url)
          .toPromise()
          .then( response => 
                    this.basliklar = response as Baslik[]
               );
  }

  addBaslik(baslik: Baslik):Observable<Baslik> {
    return  this.httpClient
            .post<Baslik>(this.baseUrl, baslik, this.httpOptions);
  }
    
}
