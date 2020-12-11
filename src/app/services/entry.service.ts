import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Entry} from "../models/entry";

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getEntriesOfBaslik(id:number): Observable<Entry[]> {
    return this.httpClient.get<Entry[]>("http://localhost:3000/baslik/" + id + "/entry");
  }

  changeLikeCount(entry: Entry){
    this.httpClient.put("http://localhost:3000/entry/" + entry.id, entry , this.httpOptions).subscribe();
  }

  addEntry(entry: Entry) {
    return this.httpClient.post<Entry>("http://localhost:3000/entry", entry, this.httpOptions);
  }

}
