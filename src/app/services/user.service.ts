import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.apiUrl}/users`;
  }

  all() {
    return this.http.get(`${this.url}`);
  }

  get(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }

  create(data) {
    return this.http.post(this.url, data);
  }

  update(id: number, data) {
    return this.http.put(`${this.url}/{id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

}
