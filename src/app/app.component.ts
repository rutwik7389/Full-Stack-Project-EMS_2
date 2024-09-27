import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';  // Ensure this path is correct
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Full stack project created by Rutwik';
  employeeForm: FormGroup;  // Form group

  constructor(private employeeService: EmployeeService, private formBuilder: FormBuilder) {
    this.employeeForm = this.formBuilder.group({
      name: [''],  // Add form controls as per your model
      designation: ['']
    });
  }

  onSubmit() {
    this.employeeService.createEmployee(this.employeeForm.value).subscribe(
      (response) => {
        console.log('Employee created successfully', response);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
