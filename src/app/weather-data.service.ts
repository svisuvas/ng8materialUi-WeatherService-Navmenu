import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IWeatherData } from './weatherData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  //private _url: string = "/assets/data/weather_mock_data.json";
  // weatherSelectedValue: number;
  private _url: string = "http://dataservice.accuweather.com/currentconditions/v1/";
  private _apiKey: string =  "?apikey=Replace_with_a_valid_apikey_from_AccuWeather";
  constructor(private http: HttpClient) { }

  getWeatherData(locationId: number): Observable<IWeatherData[]>{
    return this.http.get<IWeatherData[]>(this._url + (locationId ? locationId.toString() : '349727') + this._apiKey );
  }
}
