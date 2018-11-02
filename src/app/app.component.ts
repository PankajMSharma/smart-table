import { Component, OnInit } from '@angular/core';
import { IEmployeeData, IEmployeeRecord } from './modals/employee-data';
import { EmployeeService } from './services/employee-data.service';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { of } from 'rxjs/observable/of';

export const headers: Array<string> = ['Id', 'Name', 'Phone', 'City', 'Address 1', 'Address 2', 'Postal Code'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public empData: Observable<IEmployeeRecord[]>;
  public headings: Array<string>;
  public filterText: string;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.headings = headers;
    this.employeeService.getEmployeeData().subscribe(this.takeResponse);
  }

  private takeResponse = (res: IEmployeeData) => {
    this.empData = of(res.data);
  }
}
