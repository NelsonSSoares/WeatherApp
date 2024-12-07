import { WeatherDatas } from '../../interfaces/WeatherDatas';
import { WeatherService } from './../../services/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent implements OnInit {

  initialCityName= 'São Paulo';
  weatherDatas!: WeatherDatas;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }

  getWeatherDatas(cityName: string): void{
    this.weatherService.getWeatherDatas(cityName)
    .subscribe({
      next: (response) => {
        // abaixo, o response é atribuído à propriedade weatherDatas
        //caso response seja verdadeiro
       response && (this.weatherDatas = response);
       console.log(this.weatherDatas);

      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
