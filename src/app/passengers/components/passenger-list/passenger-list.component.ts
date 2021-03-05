import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Passenger } from "src/assets/passengers";

@Component({
  selector: "passenger-list",
  templateUrl: `./passenger-list.component.html`,
  styleUrls: ["./passenger-list.component.css"],
})
export class PassengerListComponent {
  @Input() passenger: Passenger;
  @Output() edit: EventEmitter<Passenger> = new EventEmitter();
  @Output() remove: EventEmitter<number> = new EventEmitter();
  editing: boolean = false;
  passengerToEmit: Passenger;

  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.passengerToEmit);
    }
    this.editing = !this.editing;
  }

  handleFullNameEdit(event: any) {
   
    this.passengerToEmit = { ...this.passenger, fullName: event.target.value };
  
  }

  handleRemove(id: number) {
    this.remove.emit(id);
  }
 
}
