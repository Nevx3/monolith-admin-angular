import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers() {
    this.authService.users().subscribe((res) => {
      console.log(res)
    },
      err => {
        this.router.navigate(['/login']);
      }
    )
  }
}
