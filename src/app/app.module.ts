import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LeftPartComponent } from './components/left-part/left-part.component';
import { RightPartComponent } from './components/right-part/right-part.component';
import { EntryComponent } from './components/entry/entry.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeftPartComponent,
    RightPartComponent,
    EntryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
