import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class MeteoService {

    constructor(private _http: HttpClient){}

    getData(city: String) {
        return this._http.get('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+city+'=?unitGroup=metric&include=current&key=BFU35AGFQEKYZWLYKT3PFC3VB&contentType=json')
    }
}