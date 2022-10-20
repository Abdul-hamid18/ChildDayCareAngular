import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BabysitterService } from 'src/app/Services/BabysitterServices/babysitter.service';

@Component({
  selector: 'app-babysitters-form',
  templateUrl: './babysitters-form.component.html',
  styleUrls: ['./babysitters-form.component.css']
})
export class BabysittersFormComponent implements OnInit {

  CreateBabysitter!:UntypedFormGroup

  constructor(private createservice:BabysitterService,private router:Router) { }

  ngOnInit(): void {

    this.CreateBabysitter=new UntypedFormGroup({
      f_Name:new UntypedFormControl(''),
      l_Name:new UntypedFormControl(''),
      gender:new UntypedFormControl(''),
      address:new UntypedFormControl(''),
      phone:new UntypedFormControl(''),
      age:new UntypedFormControl('')

    });
  }

  public AddtoBabysitter(){
    return this.createservice.createBabysitter(this.CreateBabysitter.value).subscribe(data=>{
      console.log(data)
      this.gotoBabysitterlist();
    });
  }

  public gotoBabysitterlist(){
    this.router.navigate(['navbar/babysitters/babysitters-list']);
  }

  submit(){
    console.log(this.CreateBabysitter.value)
    this.AddtoBabysitter();
  }

}
