import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { EmployeeService } from './services/employee-data.service';
import { KeysPipe } from './pipes/key-of-object';


@NgModule({
  declarations: [
    AppComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
