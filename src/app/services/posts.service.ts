import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

/**
 * Get posts for the given page number.
 * @param page
 * @returns
 */
  public getPosts(page: number): Observable<object> {
    return this.http.get(`${environment.apiUrl}/posts?page=${page}`);
  }
}
