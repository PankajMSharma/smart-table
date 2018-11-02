import { Component, OnInit } from '@angular/core';
import { IEmployeeData, IEmployeeRecord } from './modals/employee-data';
import { EmployeeService } from './services/employee-data.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

export const headers: Array<string> = ['Id', 'Name', 'Phone', 'City', 'Address 1', 'Address 2', 'Postal Code', 'Edit'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public allEmpRecords: IEmployeeRecord[];
  public filteredData: IEmployeeRecord[];
  public headings: Array<string>;
  public searchText: FormControl;

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit() {
    this.headings = headers;
    this.fetchEmployeeData();

    this.searchText = new FormControl();

    this.searchText.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged())
      .subscribe((text: string) => {
        this.filterTable(text.toUpperCase());
      });
  }

  private fetchEmployeeData(): void {
    this.employeeService.getEmployeeData().subscribe(this.takeResponse);
  }

  private takeResponse = (res: IEmployeeData) => {
    this.allEmpRecords = res.data;
    this.filteredData = this.allEmpRecords;
  }

  // This will search name and city having Searched Text as substring.
  private filterTable(text: string) {
    this.filteredData = this.allEmpRecords.filter((record: IEmployeeRecord) => {
      if (record.name.toLocaleUpperCase().match(text) || record.address.city.toLocaleUpperCase().match(text)) {
        return true;
      } else {
        return false;
      }
    });
  }

  public navigateToAddForm(target, id?): void {
    if (id) {
      this.router.navigate(['employees', id, 'edit']);
    } else {
      this.router.navigate(['employees/add']);
    }
  }

}
