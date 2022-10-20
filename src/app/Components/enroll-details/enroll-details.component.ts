import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Enrollment } from 'src/app/Services/EnrollmentServices/enrollment';
import { EnrollmentService } from 'src/app/Services/EnrollmentServices/enrollment.service';

@Component({
  selector: 'app-enroll-details',
  templateUrl: './enroll-details.component.html',
  styleUrls: ['./enroll-details.component.css']
})
export class EnrollDetailsComponent implements OnInit {

  id!: number
  enrollment!: Enrollment

  constructor(private route: ActivatedRoute, private enrollmentService: EnrollmentService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.enrollment = new Enrollment();
    this.enrollmentService.getEnrollmentById(this.id).subscribe( data => {
      this.enrollment = data;
    });
  
  }

}
