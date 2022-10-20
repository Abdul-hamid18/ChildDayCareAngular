import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxPrintModule } from 'ngx-print';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { EnrollmentComponent } from './Components/enroll/enrollment.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AboutComponent } from './Components/about/about.component';
import { EnrollFormComponent } from './Components/enroll-form/enroll-form.component';
import { EnrollListComponent } from './Components/enroll-list/enroll-list.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ServicesComponent } from './Components/services/services.component';
import { ServicesFormComponent } from './Components/services-form/services-form.component';
import { ServicesListComponent } from './Components/services-list/services-list.component';
import { BabysittersComponent } from './Components/babysitters/babysitters.component';
import { BabysittersListComponent } from './Components/babysitters-list/babysitters-list.component';
import { BabysittersFormComponent } from './Components/babysitters-form/babysitters-form.component';
import { HttpClientModule } from "@angular/common/http";
import { UpdateEnrollComponent } from './Components/enroll-update/update-enroll.component';
import { BabysitterUpdateComponent } from './Components/babysitters-update/babysitter-update.component';
import { ServicesUpdateComponent } from './Components/services-update/services-update.component';
import { EnrollDetailsComponent } from './Components/enroll-details/enroll-details.component';
@NgModule({
  
  declarations: [
    AppComponent,
    HomeComponent,
    LogInComponent,
    SignUpComponent,
    EnrollmentComponent,
    DashboardComponent,
    AboutComponent,
    EnrollFormComponent,
    EnrollListComponent,
    NavbarComponent,
    ServicesComponent,
    ServicesFormComponent,
    ServicesListComponent,
    BabysittersComponent,
    BabysittersListComponent,
    BabysittersFormComponent,
    UpdateEnrollComponent,
    BabysitterUpdateComponent,
    ServicesUpdateComponent,
    EnrollDetailsComponent

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgxPrintModule,
    RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
