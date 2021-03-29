import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PublicComponent } from './public.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LoginComponent, PublicComponent, RegisterComponent],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class PublicModule { }
