import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  favouritesForm: FormGroup;

  constructor(private fb: FormBuilder) {
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

    onSubmit(): void {
    if (this.favouritesForm.valid) {
      console.log(this.favouriteCities.value);     }
  }
}
