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
    this.getBasliklar();
  }

  onClick(baslik:Baslik) {
    this.onClicked.emit(baslik);
  }
  getBasliklar(){
    this.baslikService.getBasliklar().subscribe((data)=>{
      this.basliklar = data;
    });
  }

  onFilter(categoryId:number){
    // this.baslik = baslik;
    // //console.log("app comp" + id);
    // this.entryService.getEntriesOfBaslik(baslik.id).subscribe((data) => {
    //   this.entries = data;
    // }); 

    //this.getBasliklar();
  
    this.basliklar = this.basliklar.filter((baslik) => (baslik.kategoriId== categoryId));
    console.log(this.basliklar);

  }

}
