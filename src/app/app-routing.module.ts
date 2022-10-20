import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { EnrollmentComponent } from './Components/enroll/enrollment.component';
import { HomeComponent } from './Components/home/home.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { EnrollFormComponent } from './Components/enroll-form/enroll-form.component';
import { EnrollListComponent } from './Components/enroll-list/enroll-list.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { ServicesComponent } from './Components/services/services.component';
import { ServicesFormComponent } from './Components/services-form/services-form.component';
import { ServicesListComponent } from './Components/services-list/services-list.component';
import { BabysittersComponent } from './Components/babysitters/babysitters.component';
import { BabysittersFormComponent } from './Components/babysitters-form/babysitters-form.component';
import { BabysittersListComponent } from './Components/babysitters-list/babysitters-list.component';
import { UpdateEnrollComponent } from './Components/enroll-update/update-enroll.component';
import { BabysitterUpdateComponent } from './Components/babysitters-update/babysitter-update.component';
import { EnrollDetailsComponent } from './Components/enroll-details/enroll-details.component';
import { ServicesUpdateComponent } from './Components/services-update/services-update.component';
const routes: Routes = [
  { path: '', component: LogInComponent },
  { path: 'signup', component: SignUpComponent },
  {
    path: 'navbar', component: NavbarComponent,
    children: [
      { 
        path: 'enrollment', component: EnrollmentComponent,
        children: [
          { path: 'enroll-form', component: EnrollFormComponent },
          { path: 'enroll-list', component: EnrollListComponent },
          { path: 'enroll-update', component: UpdateEnrollComponent },
          { path: 'enroll-details', component:EnrollDetailsComponent}
        ]},
        {
          path: 'services', component:ServicesComponent,
          children:[
            {path: 'services-form', component:ServicesFormComponent},
            {path: 'services-list', component:ServicesListComponent},
            {path: 'services-update', component:ServicesUpdateComponent}

          ]
        },
        {
          path: 'babysitters', component:BabysittersComponent,
          children:[
            {path: 'babysitters-form', component:BabysittersFormComponent},
            {path: 'babysitters-list', component:BabysittersListComponent},
            {path: 'babysitters-update', component:BabysitterUpdateComponent}

          ]
        },
     
      { path: 'dashboard', component: DashboardComponent },
      { path: 'about', component: AboutComponent }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
