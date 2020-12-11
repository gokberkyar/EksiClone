import {Component, Input, OnInit} from '@angular/core';
import {Entry} from "../../models/entry";

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  @Input()
  entry: Entry;

  constructor() { }

  ngOnInit(): void {
  }



}
