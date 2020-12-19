import { Component, Input, OnInit } from '@angular/core';
import { Entry } from "../../models/entry";
import { EntryService } from "../../services/entry.service";
import { Baslik } from "../../models/baslik";
import { Kategori } from 'src/app/models/kategori';
import { KategoriService } from 'src/app/services/kategori.service';
import { BaslikService } from 'src/app/services/baslik.service';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-right-part',
  templateUrl: './right-part.component.html',
  styleUrls: ['./right-part.component.css']
})
export class RightPartComponent implements OnInit {

  constructor(private entryService: EntryService, 
              private kategoriService: KategoriService,
              private baslikService: BaslikService) { }

  ngOnInit(): void {
    if(this.baslikService.baslik.id != null)
      this.entryService.entryleriDoldur( this.baslikService.baslik.id );
  }

  get entryler():Entry[]{
    return this.entryService.entryler;
  }

  get baslik():Baslik{
    if ( this.baslikService.baslik == null)
      return {id:null, title:'',kategoriId:null};
    else
      return this.baslikService.baslik;
  }

  get kategoriler():Kategori[]{
    return this.kategoriService.kategoriler;
  }

  submitForm(form:NgForm){
    let newEntrySub:Subject<Entry> = new Subject<Entry>();

    if (this.baslik.id == null){
      this.baslikService
      .addBaslik( {id:null, 
        title:form.value.baslikAdi, 
        kategoriId:form.value.kategori})
      .subscribe((newbaslik) => {
          this.baslikService.baslik = newbaslik;
          this.baslikService.basliklariDoldur();

          this.entryService
         .addEntry({
            id: null,
            content: form.value.entry,
            begeniler: 0,
            baslikId: newbaslik.id})
         .subscribe( (returnentry) => {
              newEntrySub.next(returnentry);
          });
      });
    } else {
      this.entryService.addEntry({
        id: null,
        content: form.value.entry,
        begeniler: 0,
        baslikId: this.baslik.id})
      .subscribe( (returnentry) => {
          newEntrySub.next(returnentry);
      })  ;
    }

    newEntrySub.subscribe( (ent) => {
      form.resetForm();
      this.ngOnInit();
    })
  }
}
