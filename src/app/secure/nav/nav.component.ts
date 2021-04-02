import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/classes/auth';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  user: User = null;
  // @Input('user') user: User = null;


  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    Auth.userEmitter.subscribe((user: User) => {
      this.user = user;
    });
  }

  logout(): void {
    this.authService.logoutUser().subscribe((res) => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
      console.log('Logout Successfully');
    });
  }
}
