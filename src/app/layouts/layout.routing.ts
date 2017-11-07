import {Routes} from '@angular/router';
import {AdminLayoutComponent} from './admin-layout/admin-layout.component';
import {HomeComponent} from '../home/home.component';
import {AboutComponent} from '../site/about/about.component';
import {ContactComponent} from '../site/contact/contact.component';
import {BlogComponent} from '../site/blog/blog.component';

export const ROUTES: Routes = [
  // Main redirect
  {path: '', redirectTo: 'home', pathMatch: 'full'},

// App views
  // {
  //   path: 'dashboards', component: AdminLayoutComponent,
  //   // children: [
  //   //   {path: 'dashboard1', component: Dashboard1Component},
  //   //   {path: 'dashboard2', component: Dashboard2Component},
  //   //   {path: 'dashboard3', component: Dashboard3Component},
  //   //   {path: 'dashboard4', component: Dashboard4Component},
  //   //   {path: 'dashboard5', component: Dashboard5Component}
  //   // ]
  // },
  // {
  //   path: 'user', component: UserLayoutComponent,
  //   // children: [
  //   //   {path: 'dashboard41', component: Dashboard41Component}
  //   // ]
  // },
  {
    path: '', component: AdminLayoutComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'blog', component: BlogComponent},
    ]
  },
  // {
  //   path: '', component: AnonymousLayoutComponent,
  //   // children: [
  //   //   { path: 'login', component: LoginComponent },
  //   // ]
  // },

  // Handle all other routes
  {path: '**', redirectTo: 'home'}
];
