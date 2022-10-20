import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Babysitter } from 'src/app/Services/BabysitterServices/Babysitter';
import { BabysitterService } from 'src/app/Services/BabysitterServices/babysitter.service';

@Component({
  selector: 'app-babysitters-list',
  templateUrl: './babysitters-list.component.html',
  styleUrls: ['./babysitters-list.component.css']
})
export class BabysittersListComponent implements OnInit {

  babysitter!: Babysitter[]

  constructor(private babysitterservice: BabysitterService,
    private router:Router) { }

  ngOnInit(): void {

    this.getBabysitter();
  }

  public getBabysitter() {

    this.babysitterservice.getBabysitter().subscribe(data => {
      this.babysitter = data;
      console.log(data);
    });
  }

  public deleteBabysitter(id: number) {
    return this.babysitterservice.deleteBabysitter(id).subscribe(data => {
      console.log(data);
      this.getBabysitter();
    })
  }

  public updateBabysitter(id:number){
    this.router.navigate(['navbar/babysitters/babysitters-update',{id}]);
  
}


}
