import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Employee } from '../../../models/employee.model';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EmployeesService } from '../../../services/employees.service';

@Component({
  selector: 'app-employees-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private employeesService: EmployeesService) {}

  ngOnInit(): void {

    this.employeesService.getAllEmployees().subscribe({
      next: (employees) => {
        this.employees = employees;
        console.log(employees);
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
}
