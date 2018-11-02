import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IEmployeeData } from '../modals/employee-data';

@Injectable()
export class EmployeeService {
    constructor(private httpClient: HttpClient) { }

    public getEmployeeData(): Observable<IEmployeeData> {
        return this.httpClient.get<IEmployeeData>('../../assets/employee-data.json');
    }
}
