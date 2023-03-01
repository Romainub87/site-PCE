import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AccueilComponent } from './accueil/accueil.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MeteoComponent } from './meteo/meteo.component';
import {HttpClientModule} from '@angular/common/http';
import { TextAccueilComponent } from './text-accueil/text-accueil.component';
import { ReserverViewComponent } from './reserver-view/reserver-view.component';
import { RestoViewComponent } from './resto-view/resto-view.component';
import { ContactViewComponent } from './contact-view/contact-view.component';


@NgModule({
  declarations: [
    AccueilComponent,
    NavbarComponent,
    MeteoComponent,
    TextAccueilComponent,
    ReserverViewComponent,
    RestoViewComponent,
    ContactViewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AccueilComponent]
})
export class AppModule { }
