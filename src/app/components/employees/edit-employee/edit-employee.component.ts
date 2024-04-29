import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from '../../../services/employees.service';
import { response } from 'express';
import { Employee } from '../../../models/employee.model';

@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.css',
})
export class EditEmployeeComponent implements OnInit {
  employeeDetails: Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: '',
  };
  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeesService
  ) {} //inject the services

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.employeeService.getEmployee(id).subscribe({
            next: (response) => {
              console.log(response);
              this.employeeDetails = response;
            },
          });
        }
      },
    });
  }
}
