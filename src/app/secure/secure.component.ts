import { Component, OnInit } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent implements OnInit {
  user: User;

  constructor(private authService:AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loggedUser();
  }
  

  public loggedUser() {
    this.authService.loggedUser().subscribe((res: any) => {
      this.user = res.data;
    },
      err => {
        this.router.navigate(['/login']);
      }
    )
  }



}
