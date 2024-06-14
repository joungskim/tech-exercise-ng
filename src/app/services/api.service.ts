import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://your-api-base-url/api'; // Replace with your actual API base URL

  constructor(private http: HttpClient) { }

  // Example method for GET /AstronautDuty/{name}
  getAstronautDutyByName(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/AstronautDuty/${name}`);
  }

  // Example method for POST /AstronautDuty
  createAstronautDuty(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/AstronautDuty`, data);
  }

  // Example method for GET /Person
  getAllPersons(): Observable<any> {
    return this.http.get(`${this.baseUrl}/Person`);
  }

  // Example method for POST /Person
  createPerson(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/Person`, data);
  }

  // Example method for GET /Person/{name}
  getPersonByName(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/Person/${name}`);
  }
}