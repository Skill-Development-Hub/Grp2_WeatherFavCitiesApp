import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/signup'; // Use HTTP and localhost

  constructor(private http: HttpClient) {}

  signUp(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data); // API call
  }
}
