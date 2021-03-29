import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient ) { }

  /**
   * 
   * @param data 
   * @returns 
   */
  login(data) {
    console.log(environment.apiUrl)
    return this.http.post(`${environment.apiUrl}/login`, data)
  }

  users() {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });

    return this.http.get(`${environment.apiUrl}/users`, {
      headers: headers
    });
  }

  loggedUser() {
     const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`
    });

    return this.http.get(`${environment.apiUrl}/me`, {
      headers: headers
    });
  }

}
