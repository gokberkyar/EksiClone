import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Entry} from "../models/entry";
import { Baslik } from '../models/baslik';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  readonly baseUrl:string = "http://localhost:3000/entry";

  entry:Entry;
  entryler:Entry[];

  constructor(private httpClient: HttpClient) { }

  entryleriDoldur(baslikId?:number) {
    let url:string = this.baseUrl;

    if ( baslikId != null){
      url += "?baslikId=" + baslikId;
    }

    return this.httpClient
    .get<Entry[]>(url)
    .toPromise()
    .then( response => 
              this.entryler = response as Entry[]
         );

  }

  changeLikeCount(entry: Entry){
    this.httpClient.put("http://localhost:3000/entry/" + entry.id, entry , this.httpOptions).subscribe();
  }

  addEntry(entry: Entry):Observable<Entry> {
    return this.httpClient
    .post<Entry>("http://localhost:3000/entry", entry, this.httpOptions);
         
  }

}
