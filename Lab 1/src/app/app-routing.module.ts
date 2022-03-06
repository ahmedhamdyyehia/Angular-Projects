import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { EmployeesComponent } from './employees/employees.component';
import { ProductServiceService } from './services/product-service.service';

const routes: Routes = [
  {path:'employees',component:EmployeesComponent},
  {path:'department',component:DepartmentComponent}
  


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
