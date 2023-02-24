import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AccueilComponent } from './accueil/accueil.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HotelComponent } from './hotel/hotel.component';

@NgModule({
  declarations: [
    AccueilComponent,
    NavbarComponent,
    HotelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AccueilComponent]
})
export class AppModule { }
