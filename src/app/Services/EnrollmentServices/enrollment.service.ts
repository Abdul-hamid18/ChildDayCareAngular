import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Enrollment } from './enrollment';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {


  private baseURL = "http://localhost:8080/api/v1/enrollments";

  constructor(private httpClient: HttpClient,private router:Router) { }
  
  getEnrollment(): Observable<Enrollment[]>{
    return this.httpClient.get<Enrollment[]>(`${this.baseURL}`);
  }

  createEnrollmment(enrollment: Enrollment): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, enrollment);
  }

  getEnrollmentById(id: number): Observable<Enrollment>{
    return this.httpClient.get<Enrollment>(`${this.baseURL}/${id}`);
  }

  updateEnrollment(id: number, enrollment: Enrollment): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, enrollment);
  }

  deleteEnrollment(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }


}
