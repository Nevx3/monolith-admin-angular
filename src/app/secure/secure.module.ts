import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureComponent } from './secure.component';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Router, RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SecureComponent,
    NavComponent,
    MenuComponent,
    UsersComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    SecureComponent,
  ]
})
export class SecureModule { }
