import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
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

}
