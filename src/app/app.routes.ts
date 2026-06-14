import { Routes } from '@angular/router';
import { AdminLogin } from './admin-login/admin-login';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from '../layout/homepage/homepage.component';
import { LayoutComponent } from '../layout/layout.component';
import { CoursesComponent } from '../layout/Courses/Courses.component';
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
    component: LayoutComponent,
    children: [
      {
        path: 'homepage',
        component: HomepageComponent
      },
      {
        path: 'courses',
        component: CoursesComponent
      }
    ]}
];
