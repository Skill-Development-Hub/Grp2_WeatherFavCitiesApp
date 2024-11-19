import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'a939456414msh14c30ee66bb61d6p188c42jsn787cc5e682a8';
  private apiUrl = 'https://weatherapi-com.p.rapidapi.com/current.json';
                  

  constructor( private http: HttpClient) { }
  searchWeatherByCity(name : string): Observable<any>{
    const headers = new HttpHeaders()
    .set("X-RapidAPI-Key", this.apiKey)
    .set("X-RapidAPI-Host", "weatherapi-com.p.rapidapi.com")
  
    const options = {headers};
    return this.http.get(`${this.apiUrl}?q=${name}`, options);  // Appending city name to the query string
  }
}

