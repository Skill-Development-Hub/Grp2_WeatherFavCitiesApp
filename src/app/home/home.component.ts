import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'weatherTest';

  searchForm!: FormGroup;
  weather: any;
  weatherLoc: any;
  favouritesForm: FormGroup;
  favouriteCitiesWeather: any[] = [];  // Declare the array to store weather data for each favourite city

  constructor(private fb: FormBuilder, private service: WeatherService) {
    this.favouritesForm = this.fb.group({
      newCity: ['', Validators.required],
      favouriteCities: this.fb.array([])
    });
  }

  get favouriteCities(): FormArray {
    return this.favouritesForm.get('favouriteCities') as FormArray;
  }

  addCity(): void {
    const newCity = this.favouritesForm.get('newCity')?.value;
    if (newCity && this.favouriteCities.length < 5) {
      // Add city to the form array
      this.favouriteCities.push(this.fb.control(newCity));
      // Reset input field
      this.favouritesForm.get('newCity')?.reset();

      // Fetch weather data for the new city and store it
      this.service.searchWeatherByCity(newCity).subscribe((res: any) => {
        this.favouriteCitiesWeather.push(res);  // Add weather data to the array
      });
    }
  }

  removeCity(index: number): void {
    this.favouriteCities.removeAt(index);
    this.favouriteCitiesWeather.splice(index, 1);  // Remove corresponding weather data
  }

  onSubmit() {
    if (this.favouritesForm.valid) {
      console.log(this.favouriteCities.value);
    }
  }

  ngOnInit() {
    this.searchForm = this.fb.group({
      name: [null, Validators.required]
    });
  }

  searchWeather() {
    console.log(this.searchForm.value);
    this.service.searchWeatherByCity(this.searchForm.get('name')!.value).subscribe((res: { current: any; location: any }) => {
      console.log(res);
      this.weather = res.current;
      this.weatherLoc = res.location;
    });
  }

  handleSubmit(): void {
    this.searchWeather();
    this.onSubmit();
  }
}
