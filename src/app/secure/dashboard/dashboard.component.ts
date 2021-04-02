import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/interfaces/post'
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public posts: Observable<Post[]>;
  private currentPage = 1;
  private lastPage: number;

  constructor(private categoryService: CategoryService, private postsService: PostsService) { }

  ngOnInit(): void {
    this.refresh();
  }

  /**
   *
   * @returns
   */
  public getCategories() {
    return this.categoryService.getCategories().subscribe((response: any) => {
      console.log(response.data);
    });
  }

  /**
   * Get Posts list
   * @param page
   */
  public getPosts(page): void {
    this.postsService.getPosts(page).subscribe((response: any) => {
      this.posts =  of(response.data.data);
      this.lastPage = response.data.last_page;
      return of(this.posts);
    });
  }

  /**
   * Refresh the list of posts after paginate.
   */
  refresh(): void {
    this.getPosts(this.currentPage);
  }

  /**
   * Move to previous page.
   * @returns
   */
  public prev(): void {
    if (this.currentPage === 1) { return; }
    this.currentPage--;
    this.refresh();
  }

  /**
   * Move to next page.
   * @returns
   */
  public next(): void {
    if (this.currentPage === this.lastPage) { return; }
    this.currentPage++;
    this.refresh();
  }

}
