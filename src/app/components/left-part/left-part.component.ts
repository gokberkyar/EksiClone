import { Component, OnInit } from '@angular/core';
import { Baslik } from 'src/app/models/baslik';
import { BaslikService } from 'src/app/services/baslik.service';

@Component({
  selector: 'app-left-part',
  templateUrl: './left-part.component.html',
  styleUrls: ['./left-part.component.css']
})
export class LeftPartComponent implements OnInit {

  basliklar: Baslik[];

  constructor(private baslikService: BaslikService) { }

  ngOnInit(): void {
    this.baslikService.getBasliklar().subscribe((data)=>{
      this.basliklar = data;
    });
  }

}
