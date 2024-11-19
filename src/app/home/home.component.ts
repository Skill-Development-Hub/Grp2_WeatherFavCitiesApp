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
  weather : any;
  weatherLoc: any;

  favouritesForm: FormGroup;

  constructor(private fb: FormBuilder,
    private service: WeatherService ) {
    this.favouritesForm = this.fb.group({
      newCity: ['', Validators.required],
      favouriteCities: this.fb.array([])      });
  }

    get favouriteCities(): FormArray {
    return this.favouritesForm.get('favouriteCities') as FormArray;
  }

    addCity(): void {
    const newCity = this.favouritesForm.get('newCity')?.value;
    if (newCity && this.favouriteCities.length < 5) {
      this.favouriteCities.push(this.fb.control(newCity));
      this.favouritesForm.get('newCity')?.reset();
    }
  }

    removeCity(index: number): void {
    this.favouriteCities.removeAt(index);
  }

    onSubmit() {
    if (this.favouritesForm.valid) {
      console.log(this.favouriteCities.value);     }
  }

  ngOnInit(){
    this.searchForm = this.fb.group({
      name: [null, Validators.required]
    })
  }

  searchWeather(){
    console.log(this.searchForm.value);
    this.service.searchWeatherByCity(this.searchForm.get('name')!.value).subscribe((res: { current: any; location: any; })=>{
      console.log(res);
      this.weather = res.current;
      this.weatherLoc = res.location;

    })
  }

  handleSubmit(): void {
    this.searchWeather();
    this.onSubmit();
  }

}


//___________________


export class AppComponent {

  


}