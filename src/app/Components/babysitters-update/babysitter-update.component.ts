import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Babysitter } from 'src/app/Services/BabysitterServices/Babysitter';
import { BabysitterService } from 'src/app/Services/BabysitterServices/babysitter.service';

@Component({
  selector: 'app-babysitter-update',
  templateUrl: './babysitter-update.component.html',
  styleUrls: ['./babysitter-update.component.css']
})
export class BabysitterUpdateComponent implements OnInit {
  id!: number;
  babysitter: Babysitter = new Babysitter();

  constructor(private babysitterService: BabysitterService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.babysitterService.getBabysitterById(this.id).subscribe(data => {
      this.babysitter = data;
    });
  }

  onSubmit(){
    this.babysitterService.updateBabysitter(this.id, this.babysitter).subscribe( data =>{
      this.goToBabysitterList();
    });
  }

  goToBabysitterList(){
    this.router.navigate(['navbar/babysitters/babysitters-list']);
  }

}
