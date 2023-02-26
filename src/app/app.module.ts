import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AccueilComponent } from './accueil/accueil.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MeteoComponent } from './meteo/meteo.component';
import {HttpClientModule} from '@angular/common/http';
import { TextAccueilComponent } from './text-accueil/text-accueil.component';

@NgModule({
  declarations: [
    AccueilComponent,
    NavbarComponent,
    MeteoComponent,
    TextAccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AccueilComponent]
})
export class AppModule { }
