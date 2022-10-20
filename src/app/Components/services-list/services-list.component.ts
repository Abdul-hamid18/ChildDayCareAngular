import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Services } from 'src/app/Services/MyServicesService/services';
import { ServicesServiceService } from 'src/app/Services/MyServicesService/services-service.service';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent implements OnInit {

  services!:Services[]

  constructor(private servicesService:ServicesServiceService,
    private router:Router) { }

  ngOnInit(): void {
    this.getServices();
  }

  public getServices(){
    
    this.servicesService.getServices().subscribe(data=>{
      this.services=data;
      console.log(data);
    });
  }

  public deleteService(id:number){
    return this.servicesService.deleteService(id).subscribe(data=>{
      console.log(data);
      this.getServices();
    })
      }

      public updateService(id:number){
        this.router.navigate(['navbar/services/services-update',{id}]);
      
    }

}
