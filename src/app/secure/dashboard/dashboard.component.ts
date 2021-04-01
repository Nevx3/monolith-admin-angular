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

  constructor(private categoryService: CategoryService, private postsService: PostsService) { }

  ngOnInit(): void {
    // this.getCatrgories();
    this.getPosts();
  }

  /**
   *
   * @returns
   */
  public getCatrgories() {
    return this.categoryService.getCategories().subscribe((response: any) => {

      console.log(response.data);
    });
  }

  public getPosts() {
    this.postsService.getPosts().subscribe((response: any) => {
      this.posts =  of(response.data.data);
      return of(this.posts);
      // console.log(this.posts)
    })
  }

}
