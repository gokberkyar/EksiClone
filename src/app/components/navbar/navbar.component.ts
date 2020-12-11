import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() onFilter = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(categoryId:number) {
    console.log("Allianz");
    this.onFilter.emit(categoryId);

  }
  
  
}
