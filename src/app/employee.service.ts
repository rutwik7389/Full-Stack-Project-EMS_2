/*import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee'; // Ensure this path is correct
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/employees";

  constructor(private httpClient: HttpClient) { }

  // Corrected return type to Observable<Employee[]>
  getEmployeeList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.baseURL);


  }

  createEmployee(employee:Employee):Observable<object>{
    return this.httpClient.post(`${this.baseURL}`,employee);
  }



  
}*/import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee'; // Ensure this path is correct

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/employees";  // Backend URL

  constructor(private httpClient: HttpClient) { }

  // Fetch the list of employees
  getEmployeeList(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.baseURL);
  }

  // Create a new employee
  createEmployee(employee: Employee): Observable<object> {
    return this.httpClient.post(this.baseURL, employee);  // No need for interpolation here
  }

  getEmployeeById(id:number):Observable<Employee>{

return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);

  }


  updateEmployee(id:number,employee:Employee):Observable<Employee>{
    return this.httpClient.put<Employee>(`${this.baseURL}/${id}`,employee);
  }

  deleteEmployeeById(id:number):Observable<object>{
    return this.httpClient.delete<Employee>(`${this.baseURL}/${id}`);
  }
}
