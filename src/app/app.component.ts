import { Component, OnInit } from '@angular/core';
import { Baslik } from './models/baslik';
import { BaslikService } from './services/baslik.service';
import { EntryService } from './services/entry.service';
import { KategoriService } from './services/kategori.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'eksisozlukClone';

  constructor(private kategoriService: KategoriService,
              private baslikService: BaslikService, 
              private entryService:EntryService) { }

  ngOnInit(): void {
    this.baslikService.basliklariDoldur();
    this.kategoriService.kategorileriDoldur();
  }

  get basliklar():Baslik[]{
    return this.baslikService.basliklar;
  }

  baslikFiltrele(kategoriId:number): void {
    this.baslikService.basliklariDoldur(kategoriId);
    this.baslikService.emptyBaslik();
    this.entryService.entryler = [];
  }
  
  baslikSec(secilenBaslik:Baslik){
    this.baslikService.baslik = secilenBaslik;
    this.entryService.entryleriDoldur(secilenBaslik.id);
  }
}

