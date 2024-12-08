import { Component, Input, OnInit } from '@angular/core';
import { WeatherDatas } from '../../weather/interfaces/WeatherDatas';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faW, faWind } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})
export class WeatherCardComponent {
  //dados receidos pelo componente pai
  @Input() weatherDatasInput!: WeatherDatas;

  minTempuratureIcon = faTemperatureLow;
  maxTempuratureIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;


}
