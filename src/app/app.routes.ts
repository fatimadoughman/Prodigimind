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
import { FeedbackComponent } from './feedback/feedback';


export const routes: Routes = [

  /* =========================
     ADMIN
  ========================= */

  {
    path: 'admin-login',
    component: AdminLogin
  },

  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent
  },


  /* =========================
     MAIN WEBSITE
     NAVBAR STAYS VISIBLE
  ========================= */

  {
    path: '',
    component: LayoutComponent,

    children: [

      /* HOME */
      {
        path: '',
        component: HomepageComponent
      },

      /* COURSES */
      {
        path: 'courses',
        component: CoursesComponent
      },

      /* MAIN COURSES */
      {
        path: 'main-courses',
        component: MainCoursesComponent
      },

      /* SERVICES */
      {
        path: 'servicess',
        component: ServicessComponent
      },

      /* PROJECTS */
      {
        path: 'projects',
        component: ProjectsComponent
      },

      /* ABOUT */
      {
        path: 'about',
        component: AboutComponent
      },

      /* CONTACT */
      {
        path: 'contact-us',
        component: ContactUsComponent
      },

      /* FEEDBACK */
      {
        path: 'feedback',
        component: FeedbackComponent
      }

    ]
  },


  /* =========================
     UNKNOWN URL
  ========================= */

  {
    path: '**',
    redirectTo: ''
  }

];
