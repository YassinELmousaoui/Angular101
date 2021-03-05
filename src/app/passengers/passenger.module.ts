import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PassengerDashboardComponent } from "./containers/passenger-dashboard.component";
import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";
import { PassengerListComponent } from "./components/passenger-list/passenger-list.component";
import { PassengerService } from "./passenger.service";
import { HttpClientModule } from "@angular/common/http";
import { PassengerAddFormComponent } from './containers/passenger-add-form/passenger-add-form.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerListComponent,
    PassengerAddFormComponent,
  ],
  imports: [CommonModule ,HttpClientModule,FormsModule,],
  providers: [PassengerService],
  exports: [PassengerDashboardComponent],
})
export class PassengersModule {}
