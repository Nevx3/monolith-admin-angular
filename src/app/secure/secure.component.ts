import { Component, OnInit } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { Auth } from '../classes/auth';
@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent implements OnInit {
  userr: User;

  constructor(private authService:AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loggedUser();
  }
  

  public loggedUser() {
    this.authService.loggedUser().subscribe((res: any) => {
      this.userr = res.data;
      Auth.user = this.userr;   // Auth is a class inside classes/auth.ts
    },
      err => {
        this.router.navigate(['/login']);
      }
    )
  }



}
