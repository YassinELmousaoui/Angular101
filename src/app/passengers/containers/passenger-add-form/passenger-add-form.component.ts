import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Passenger , Child } from 'src/assets/passengers';
import { PassengerService } from '../../passenger.service';

@Component({
  selector: 'passenger-add-form',
  templateUrl: './passenger-add-form.component.html',
  styleUrls: ['./passenger-add-form.component.css']
})
export class PassengerAddFormComponent implements OnInit {
  public passengers ;
  public passengersSubscription$ : Subscription ;
  public childrensCount : Number[] =[];
  constructor(private passengerService: PassengerService) { }
  @ViewChild('myForm') form;
  ngOnInit() {
    this.getPassengers();
  }

  getPassengers(): void {
    this.passengerService.getPassengers()
        .subscribe(passengers => this.passengers = passengers);
  }
  ngAfterViewInit() {
    console.log(this.form.controls)
  
  }
  addChild(){
  this.childrensCount = this.childrensCount.concat(0)
  }
  
  handelAddPassenger(form: NgForm){
    let childrens : Child[] = [];
    for(let i=0 ; i<this.childrensCount.length ; i++){
      childrens = childrens.concat({
        name : form.controls[`childName-${i}`].value,
        age : form.controls[`childAge-${i}`].value,
      })
    }
    let newPassenger : Passenger ={
      id:this.passengers[this.passengers.length-1].id+1,
      fullName : form.controls.fullName.value,
      checkedIn : form.controls.checkedIn.value,
      checkInDate : new Date(form.controls.checkInDate.value).getTime(),
      children :[...childrens]
    }  ;
    
      console.log( newPassenger)
    this.addPassenger(newPassenger)
  }

  addPassenger(passenger:Passenger){
    this.passengersSubscription$ = this.passengerService.addPassenger(passenger).subscribe((passenger)=>
    {this.passengers=this.passengers.concat([passenger]);
    });
   }
}
