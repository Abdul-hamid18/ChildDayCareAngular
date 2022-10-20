import { Component, OnInit } from '@angular/core';    
import { Router } from '@angular/router';
import { Enrollment } from 'src/app/Services/EnrollmentServices/enrollment';
import { EnrollmentService } from 'src/app/Services/EnrollmentServices/enrollment.service';

@Component({
  selector: 'app-enroll-list',
  templateUrl: './enroll-list.component.html',
  styleUrls: ['./enroll-list.component.css']
})
export class EnrollListComponent implements OnInit {
enrollment!:Enrollment[]
page: number = 1;
count: number =0;
tableSize: number = 10;
tableSizes: any = [4, 8, 12, 16];




  constructor(private enrollmentservice:EnrollmentService, private router: Router) { 

  }

  ngOnInit(): void {
    this.getEnrollment();
    
  }
  

  public getEnrollment(){
    
    this.enrollmentservice.getEnrollment().subscribe(data=>{
      this.enrollment=data;
      console.log(data);
    });
  }

  public deleteEnroll(id:number){
return this.enrollmentservice.deleteEnrollment(id).subscribe(data=>{
  console.log(data);
  this.getEnrollment();
})
  }

  public updateEnroll(id:number){
        this.router.navigate(['navbar/enrollment/enroll-update',{id}]);
      
  }

  enrollDetails(id: number){
    this.router.navigate(['navbar/enrollment/enroll-details', {id}]);
  }


  onTableDataChange(event: any) {
    this.page = event;
    this.getEnrollment();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getEnrollment();
  }

 

}


