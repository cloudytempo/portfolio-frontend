import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Api {

  private apiUrl = `${environment.apiUrl}/users`;
  constructor(private http: HttpClient) { }

  getUsers() {
    return new Promise((resolve, reject) => {
    this.http.get(this.apiUrl).subscribe({
      next: (data) => resolve(data),
      error: (err) => reject(err)
    });
  });
  }

  // addUser(user: any) {
  //   return this.http.post(this.apiUrl, user);
  // }
}
