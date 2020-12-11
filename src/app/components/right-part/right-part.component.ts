import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-part',
  templateUrl: './right-part.component.html',
  styleUrls: ['./right-part.component.css']
})
export class RightPartComponent implements OnInit {

  constructor() { }
  @Input() id: number;

  ngOnInit(): void {
    
  }

}
