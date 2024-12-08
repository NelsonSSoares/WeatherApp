import { Subject, takeUntil } from 'rxjs';
import { WeatherDatas } from '../../interfaces/WeatherDatas';
import { WeatherService } from './../../services/weather.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent implements OnInit, OnDestroy {

  private readonly destroy$: Subject<void> = new Subject();
  initialCityName= 'São Paulo';
  weatherDatas!: WeatherDatas;
  searchIcon = faMagnifyingGlass;

  constructor(private weatherService: WeatherService) { }
  // chama o método getWeatherDatas no ngOnInit, quando o componente é inicializado
  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }



  getWeatherDatas(cityName: string): void{
    this.weatherService.getWeatherDatas(cityName)
    .pipe(
      takeUntil(this.destroy$) // cancela a requisição quando o componente for finalizado, evitando memory leaks
      // takeUntil é um operador que cancela a requisição quando o observable passado como argumento emite um valor
    )
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

  onSubmit(): void {
    this.getWeatherDatas(this.initialCityName);
    this.initialCityName = '';
  }

 // método que será chamado no ngOnDestroy,qunado o componente for finalizado
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
