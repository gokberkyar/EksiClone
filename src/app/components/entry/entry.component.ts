import {Component, Input, OnInit} from '@angular/core';
import {Entry} from "../../models/entry";
import {EntryService} from "../../services/entry.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  @Input()
  entry: Entry;

  constructor(private entryService: EntryService, private httpClient:HttpClient) { }

  ngOnInit(): void {
  }


  updateLike(value){
    this.entry.begeniler += value
    this.entryService.changeLikeCount(this.entry);
  }


}
