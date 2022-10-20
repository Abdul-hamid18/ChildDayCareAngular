import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesServiceService } from 'src/app/Services/MyServicesService/services-service.service';

@Component({
  selector: 'app-services-form',
  templateUrl: './services-form.component.html',
  styleUrls: ['./services-form.component.css']
})
export class ServicesFormComponent implements OnInit {

  CreateServices!:UntypedFormGroup

  constructor(private createservice:ServicesServiceService,private router:Router) { }

  ngOnInit(): void {

    this.CreateServices=new UntypedFormGroup({
      name:new UntypedFormControl(''),
      description:new UntypedFormControl(''),
      status:new UntypedFormControl('')
  
    });
  }
  public gotoServiceList(){
    this.router.navigate(['navbar/services/services-list']);
  }

  public AddtoServices(){
    return this.createservice.createService(this.CreateServices.value).subscribe(data=>{
      console.log(data)
      this.gotoServiceList();
    });

}

submit(){
  console.log(this.CreateServices.value)
  this.AddtoServices();
}

}
