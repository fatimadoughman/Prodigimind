import { Routes } from '@angular/router';
import { AdminLogin } from './admin-login/admin-login';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from '../layout/homepage/homepage.component';
export const routes: Routes = [
{
  path: 'admin-login',
  component: AdminLogin
},
{
  path: 'admin-dashboard',
  component: AdminDashboardComponent
},

{
  path: '',
  component: HomepageComponent
}
];
