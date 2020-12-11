import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Baslik } from 'src/app/models/baslik';
import { BaslikService } from 'src/app/services/baslik.service';

@Component({
  selector: 'app-left-part',
  templateUrl: './left-part.component.html',
  styleUrls: ['./left-part.component.css']
})
export class LeftPartComponent implements OnInit {

  basliklar: Baslik[];

  @Output() onClicked = new EventEmitter<Baslik>();

  constructor(private baslikService: BaslikService) { }

  ngOnInit(): void {
    this.baslikService.getBasliklar().subscribe((data)=>{
      this.basliklar = data;
    });
  }

  onClick(baslik:Baslik) {
    this.onClicked.emit(baslik);
  }

}
