import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../weather-data.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  public weatherData = [];
  public weatherSelectedValue: number;
  constructor(private _weatherDataService: WeatherDataService) { }

  ngOnInit() {

   // this._weatherDataService.getWeatherData(this.weatherSelectedValue)
   // .subscribe(data => this.weatherData = data);
  }

  getData(value: number){
    console.log("============== " + this.weatherSelectedValue);
    this._weatherDataService.getWeatherData(this.weatherSelectedValue)
    .subscribe(data => this.weatherData = data);

  }
}
