import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {

  constructor(private router:Router) { }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const url = event.urlAfterRedirects;
        const body = document.getElementsByTagName('div')[0];
        body.className = this.getClassNameFromUrl(url);
      }
    });

  }

  private getClassNameFromUrl(url: string): string {
    if (url.includes('/accueil')) {
      return 'accueil';
    } else if (url.includes('/resto')) {
      return 'resto';
    } else if (url.includes('/reserver')) {
      return 'reserver';
    } else if (url.includes('/contact')) {
      return 'contact';
    } else {
      return '';
    }
  }

}
