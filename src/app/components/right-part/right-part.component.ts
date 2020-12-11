import { Component, Input, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Entry} from "../../models/entry";
import {EntryService} from "../../services/entry.service";
import {Baslik} from "../../models/baslik";

@Component({
  selector: 'app-right-part',
  templateUrl: './right-part.component.html',
  styleUrls: ['./right-part.component.css']
})
export class RightPartComponent implements OnInit {

  constructor(private entryService: EntryService) { }
  baslik: Baslik = {"id":null, "title":null, "kategori":null};
  entries: Entry[];


  ngOnInit(): void {

  }

  onClicked(baslik:Baslik) {
    this.baslik = baslik;
    //console.log("app comp" + id);
    this.entryService.getEntriesOfBaslik(baslik.id).subscribe((data) => {
      this.entries = data;
    });
  }

}
