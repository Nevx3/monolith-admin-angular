import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
      'device_name': new FormControl('ben')
    })
  }

  /**
   * login through email and password
   */
  submit() {
    const data = this.form.getRawValue();
    this.authService.login(data).subscribe((res: any) => {
      localStorage.setItem('token', res.access_token )
    });
  }

}
