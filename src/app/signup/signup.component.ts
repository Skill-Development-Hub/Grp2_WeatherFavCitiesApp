import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';  // Import Router

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar, // For notifications
    private router: Router  // Inject Router here
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group(
      {
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.authService.signUp(this.signupForm.value).subscribe({
        next: (response) => {
          console.log('Registration successful:', response);
          this.snackBar.open('Registration successful!', 'Close', { duration: 3000 });
          this.router.navigate(['/home']);  // Redirect to the home page on success
        },
        error: (error) => {
          console.error('Error during registration:', error);
          this.snackBar.open('Registration failed. Please try again.', 'Close', { duration: 3000 });
        },
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
