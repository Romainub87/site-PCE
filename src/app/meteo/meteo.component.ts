import { Component } from '@angular/core';
import { MeteoService } from 'src/services/meteo.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss']
})
export class MeteoComponent {
  data:any;

  constructor(private _apiservice: MeteoService){}

  ngOnInit() {
    this._apiservice.getData("Bordeaux").subscribe(res => {
      this.data = res;
      console.log(res);
    });
  }
}
