import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { Passenger } from "src/assets/passengers";
import { PassengerService } from "../passenger.service";

@Component({
  selector: "component-dashboard",
  template: `
    <h3>AirLine passengers</h3>
    <passenger-counter [items]="passengers"></passenger-counter>
    
    <div class="list">
      <passenger-list
        *ngFor="let passenger of passengers"
        [passenger]="passenger"
        (edit)="editPassenger($event)"
        (remove)="removePassenger($event)">
      </passenger-list>
    </div>
    
  `,
  styleUrls: ["./passenger-dashboard.component.css"],
})
export class PassengerDashboardComponent implements OnInit {
  public passengers;
  public passengersSubscription$ : Subscription;
  constructor(private passengerService: PassengerService) {}

  ngOnInit() {
    this.getPassengers();
  }

  getPassengers(): void {
    this.passengerService.getPassengers()
        .subscribe(passengers => this.passengers = passengers);
  }


  editPassenger(passenger : Passenger) {
    
    this.passengersSubscription$ = this.passengerService.editPassenger(passenger).subscribe((passenger)=>{
      this.passengers = this.passengers.map((p) => {
        if (p.id === passenger.id) {
          return Object.assign({}, p, passenger);
        }
        return p;
      })
    },this.logErr);
  }

  removePassenger(id: number) {
    this.passengersSubscription$ =  this.passengerService
      .removePassenger(id)
      .subscribe(()=>{
        this.passengers = this.passengers.filter(
          (passenger) => passenger.id !== id
        )
      },this.logErr)
    
  }

  logErr = (error : HttpErrorResponse) => console.error(error);
  
}
