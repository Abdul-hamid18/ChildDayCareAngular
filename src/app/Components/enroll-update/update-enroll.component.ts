import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Enrollment } from 'src/app/Services/EnrollmentServices/enrollment';
import { EnrollmentService } from 'src/app/Services/EnrollmentServices/enrollment.service';
import { Services } from 'src/app/Services/MyServicesService/services';
import { ServicesServiceService } from 'src/app/Services/MyServicesService/services-service.service';

@Component({
  selector: 'app-update-enroll',
  templateUrl: './update-enroll.component.html',
  styleUrls: ['./update-enroll.component.css']
})
export class UpdateEnrollComponent implements OnInit {

  id!: number;
  enroll: Enrollment = new Enrollment();
  services!:Services[]

  constructor(private enrollmentService: EnrollmentService,
    private servicesService:ServicesServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getServices();
    this.id = this.route.snapshot.params['id'];

    this.enrollmentService.getEnrollmentById(this.id).subscribe(data => {
      this.enroll = data;
    });
  }
  
  onSubmit(){
    this.enrollmentService.updateEnrollment(this.id, this.enroll).subscribe( data =>{
      this.goToEnrollList();
    });
  }

  goToEnrollList(){
    this.router.navigate(['navbar/enrollment/enroll-list']);
  }

  public getServices(){
    
    this.servicesService.getServices().subscribe(data=>{
      this.services=data;
      console.log(data);
    });
  }
  

}
