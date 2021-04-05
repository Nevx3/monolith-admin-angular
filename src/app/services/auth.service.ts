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
    return this.http.post(`${environment.apiUrl}/login`, data);
  }

  users() {
    return this.http.get(`${environment.apiUrl}/users`);
  }

  loggedUser() {
    return this.http.get(`${environment.apiUrl}/me`);
  }

  /**
   *
   * @returns
   */
  logoutUser() {
    return this.http.post(`${environment.apiUrl}/logout`, {'token': localStorage.getItem('token')});
  }

}
