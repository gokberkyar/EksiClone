import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LeftPartComponent } from './components/left-part/left-part.component';
import { RightPartComponent } from './components/right-part/right-part.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeftPartComponent,
    RightPartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
