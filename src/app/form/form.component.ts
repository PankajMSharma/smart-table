import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { EmployeeService } from '../services/employee-data.service';
import { IEmployeeData, IEmployeeRecord } from '../modals/employee-data';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public employeeForm: FormGroup;
  public formTitle = 'Employee Form';

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService) {

    this.employeeForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)])),
      phone: new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^[0-9]*$/gm)])),
      city: new FormControl(''),
      address_line1: new FormControl(''),
      address_line2: new FormControl(''),
      postal_code: new FormControl('')
    });

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      let record: IEmployeeRecord;

      this.employeeService.getEmployeeData().subscribe((records: IEmployeeData) => {
        record = records.data.find(entrySet => {
          return entrySet.id.toString() === paramMap.get('id');
        });

        this.employeeForm.setValue({
          id: record.id,
          name: record.name,
          phone: record.phone,
          city: record.address.city,
          address_line1: record.address.address_line1,
          address_line2: record.address.address_line2,
          postal_code: record.address.postal_code
        });
      });
    });
  }

  ngOnInit() {
  }

  public onSubmit() {
    this.employeeService.postEmployeeData(this.employeeForm.value).subscribe(response => {
      console.log(response);
    });
  }
}
