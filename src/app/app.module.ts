import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SearchNDcardsComponent } from './search-ndcards/search-ndcards.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SearchNDcardsComponent, // Register components here
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Required for Angular Material animations
    ReactiveFormsModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatToolbarModule,
    HttpClientModule, // Add HttpClientModule for API calls
  ],
  providers: [
    provideHttpClient(), // Angular's functional HTTP client provider
    provideAnimations(), // Angular animations provider
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
