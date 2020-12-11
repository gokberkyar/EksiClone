import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Entry} from "../models/entry";

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor(private httpClient: HttpClient) { }

  getEntriesOfBaslik(id:number): Observable<Entry[]> {
    return this.httpClient.get<Entry[]>("http://localhost:3000/baslik/" + id + "/entry");
  }
}
