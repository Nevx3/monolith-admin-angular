import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: Observable<User[]>;
  form: FormGroup;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
  }

  /**
   * get all the users
   */
  public getUsers() {
    this.userService.all().subscribe((response: any) => {
      console.log(response);
      this.users =  of(response);
      return of(this.users);
    },
      err => {
        this.router.navigate(['/login']);
      }
    );
  }

  /**
   * Refresh listing of the users.
   */
  public refresh() {
    this.getUsers();
  }

  /**
   * Add new user
   */
  public addNewUser() {
    const data = this.form.getRawValue();
    this.userService.create(data).subscribe((response) => {
      console.log('User Created');
      this.form.reset();
      this.refresh();
    });
  }

  /**
   * Delete User
   * @param id
   */
  public deleteUser(id: number) {
    this.userService.delete(id).subscribe(() => {
      console.log('User Deleted');
      this.refresh();
    },
    err => {
      console.log(err);
    });
  }


}
