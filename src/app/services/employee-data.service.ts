import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { IEmployeeData, IEmployeeRecord } from '../modals/employee-data';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class EmployeeService {

    constructor(private router: Router, private httpClient: HttpClient) {}

    public getEmployeeData(): Observable<IEmployeeData> {
        return this.httpClient.get<IEmployeeData>('../../assets/employee-data.json');
    }

    public postEmployeeData(empRecord: IEmployeeRecord) {
        return this.httpClient.post<IEmployeeRecord>('../../assets/employee.json', empRecord).pipe(
            catchError((error) => {
                this.router.navigate(['employees']);
                return Observable.throw(error);
            })
          );
    }
}
