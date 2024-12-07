import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey = "6e7b8fa6b5a64360dcee5b495b2fdfed";

  constructor(private http: HttpClient) { }

  getWeatherDatas(cityName: string): Observable<any>{
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.apiKey}`,{});
  }
}
