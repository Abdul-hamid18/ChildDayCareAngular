import { Component, OnInit } from '@angular/core';
import { Babysitter } from 'src/app/Services/BabysitterServices/Babysitter';
import { BabysitterService } from 'src/app/Services/BabysitterServices/babysitter.service';
import { Enrollment } from 'src/app/Services/EnrollmentServices/enrollment';
import { EnrollmentService } from 'src/app/Services/EnrollmentServices/enrollment.service';
import { Services } from 'src/app/Services/MyServicesService/services';
import { ServicesServiceService } from 'src/app/Services/MyServicesService/services-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  babysitter!:Babysitter[]
  enrollment!:Enrollment[]
  services!:Services[]

  constructor(private babysitterservice:BabysitterService,
    private enrollmentservice:EnrollmentService,
    private servicesService:ServicesServiceService) { }

  ngOnInit(): void {
    
    this.getBabysitter();
    this.getEnrollment();
    this.getServices();
  }

  public getBabysitter(){
    
    this.babysitterservice.getBabysitter().subscribe(data=>{
      this.babysitter=data;
      console.log(data);
    });
  }

  public getEnrollment(){
    
    this.enrollmentservice.getEnrollment().subscribe(data=>{
      this.enrollment=data;
      console.log(data);
    });
  }

  public getServices(){
    
    this.servicesService.getServices().subscribe(data=>{
      this.services=data;
      console.log(data);
    });
  }


}
