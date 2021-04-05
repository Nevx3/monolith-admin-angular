import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url: string;
  constructor(private http: HttpClient) {
    this.url = `${environment.apiUrl}/posts`;
   }

/**
 * Get posts for the given page number.
 * @param page
 * @returns
 */
  public getPosts(page: number): Observable<object> {
    return this.http.get(`${this.url}?page=${page}`);
  }

  public deletePost(postId: number) {
    return this.http.delete(`${this.url}/${postId}`);
  }
}
