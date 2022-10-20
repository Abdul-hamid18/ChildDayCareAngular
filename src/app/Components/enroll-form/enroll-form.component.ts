import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EnrollmentService } from 'src/app/Services/EnrollmentServices/enrollment.service';
import { Services } from 'src/app/Services/MyServicesService/services';
import { ServicesServiceService } from 'src/app/Services/MyServicesService/services-service.service';

@Component({
  selector: 'app-enroll-form',
  templateUrl: './enroll-form.component.html',
  styleUrls: ['./enroll-form.component.css']
})
export class EnrollFormComponent implements OnInit {
  services!:Services[]

CreateEnrollment!:UntypedFormGroup


  constructor(private createservice:EnrollmentService,
    private servicesService:ServicesServiceService,
    private router:Router) { }

  ngOnInit(): void {
    this.getServices();

    

    this.CreateEnrollment=new UntypedFormGroup({
      ch_Fname:new UntypedFormControl(''),
      ch_Lname:new UntypedFormControl(''),
      enroll_Date:new UntypedFormControl(''),
      ch_Gender:new UntypedFormControl(''),
      pr_Fname:new UntypedFormControl(''),
      pr_Lname:new UntypedFormControl(''),
      phone:new UntypedFormControl(''),
      email:new UntypedFormControl(''),
      pr_Gender:new UntypedFormControl(''),
      category:new UntypedFormControl(''),
      address:new UntypedFormControl('')


    });
  }
public AddtoEnrollment(){
  return this.createservice.createEnrollmment(this.CreateEnrollment.value).subscribe(data=>{
    console.log(data)
    this.gotoEnrolllist();
  });
}

public gotoEnrolllist(){
  this.router.navigate(['navbar/enrollment/enroll-list']);
}
  submit(){
    console.log(this.CreateEnrollment.value)
    this.AddtoEnrollment();
  }
  public getServices(){
    
    this.servicesService.getServices().subscribe(data=>{
      this.services=data;
      console.log(data);
    });
  }

}
