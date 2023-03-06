import { ReserverViewComponent } from './reserver-view/reserver-view.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextAccueilComponent } from './text-accueil/text-accueil.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { RestoViewComponent } from './resto-view/resto-view.component';

const routes: Routes = [
  { path: 'accueil', component: TextAccueilComponent },
  { path: 'reserver', component: ReserverViewComponent },
  { path: 'resto', component: RestoViewComponent },
  { path: 'contact', component: ContactViewComponent },
  { path: '**', redirectTo: 'accueil' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
