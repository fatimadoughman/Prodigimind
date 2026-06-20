import { Routes } from '@angular/router';
import { AdminLogin } from './admin-login/admin-login';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomepageComponent } from '../layout/homepage/homepage.component';
import { LayoutComponent } from '../layout/layout.component';
import { CoursesComponent } from '../layout/Courses/Courses.component';
import { AboutComponent } from './About/About.component';
import { MainCoursesComponent } from './main-courses/main-courses.component';
import { ProjectsComponent } from './projects/projects';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicessComponent } from './servicess/servicess.component';
export const routes: Routes = [
  {
    path: 'admin-login',
    component: AdminLogin
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent
  },{
    path: 'projects',
    component:ProjectsComponent
  },
   {
    path: 'servicess',
    component: ServicessComponent
  },
 {
  path: 'main-courses',
  component: MainCoursesComponent
},
     {
    path: 'about',
    component: AboutComponent
  },
    {
    path: 'contact-us',
    component: ContactUsComponent
  },
{
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: '',
      component: HomepageComponent
    },
    {
      path: 'courses',
      component: CoursesComponent
    }
  ]
},
{
  path: '**',
  redirectTo: ''
}
];
