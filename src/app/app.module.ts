import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { EmployeeService } from './services/employee-data.service';
import { KeysPipe } from './pipes/key-of-object';
import { AppRoutingModule } from './app.routing';
import { FormComponent } from './form/form.component';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    KeysPipe,
    FormComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [LoaderComponent]
})
export class AppModule { }
