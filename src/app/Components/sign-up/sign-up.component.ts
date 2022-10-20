import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  Signup!:UntypedFormGroup

  constructor() { }

  ngOnInit(): void {
    this.Signup = new UntypedFormGroup({
      uname: new UntypedFormControl(''),
      psw: new UntypedFormControl(''),
      psw_confirm: new UntypedFormControl('')

    });
  }
  submit(){
    console.log(this.Signup.value);
  }

}
