import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerAddFormComponent } from './passengers/containers/passenger-add-form/passenger-add-form.component';
import { RouterModule, Routes } from '@angular/router';
import { PassengerDashboardComponent } from './passengers/containers/passenger-dashboard.component';

const routes: Routes = [
  { path: 'add', component: PassengerAddFormComponent },
  { path: 'dashboard', component: PassengerDashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
