import { Component } from '@angular/core';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';

  employeeArray:Employee[] = [
    { id:1, nombre:'Pedro Jose', pais:'Colombia' },
    { id:2, nombre:'Maria Katalina', pais:'Venezuela' },
    { id:3, nombre:'Margarita Madero', pais:'España' },
  ]

  seleccionEmpleado:Employee = new Employee();
}
