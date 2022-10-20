import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Services } from 'src/app/Services/MyServicesService/services';
import { ServicesServiceService } from 'src/app/Services/MyServicesService/services-service.service';

@Component({
  selector: 'app-services-update',
  templateUrl: './services-update.component.html',
  styleUrls: ['./services-update.component.css']
})
export class ServicesUpdateComponent implements OnInit {

  id!: number;
  service: Services = new Services();

  constructor(private servicesService: ServicesServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.servicesService.getServiceById(this.id).subscribe(data => {
      this.service = data;
    });
  }

  onSubmit(){
    this.servicesService.updateServices(this.id, this.service).subscribe( data =>{
      this.goToServicesList();
    });
  }

  goToServicesList(){
    this.router.navigate(['navbar/services/services-list']);
  }

}
