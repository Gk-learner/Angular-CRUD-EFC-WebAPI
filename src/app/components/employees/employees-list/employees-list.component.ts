import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Employee } from '../../../models/employee.model';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-employees-list',
  standalone: true,
  imports: [],
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
})
export class EmployeesListComponent implements OnInit {
  constructor() {}

  employees: Employee[] = [
    {
      id: 'ndjfjifji45n8ikddvnk',
      name: 'Jenice',
      email: 'test@EmailValidator.com',
      phone: 67389291,
      salary: 600000,
      department: 'HR',
    },
    {
      id: 'ndjfjifji45ndsfeikddvnk',
      name: 'John',
      email: 'maker@EmailValidator.com',
      phone: 45389291,
      salary: 200000,
      department: 'FE',
    },
    {
      id: 'ndjfjifj34fikddvnk',
      name: 'Denny',
      email: 'brain@EmailValidator.com',
      phone: 67989291,
      salary: 70000,
      department: 'BE',
    },
  ];
  ngOnInit(): void {}
}
