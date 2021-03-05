import { Injectable } from "@angular/core";
import { Observable , of} from "rxjs";

import { map } from "rxjs/operators";
import {  Passenger, passengers } from "src/assets/passengers";

@Injectable({
  providedIn: 'root',
})
export class PassengerService {
  private passengers  
  constructor() {}

  public getPassengers(): Observable<Passenger[]> {
    
    this.passengers = of(passengers);
    return this.passengers;
  }

  public editPassenger( passenger : Passenger){
    this.passengers.subscribe(
      (list)=>{
        list = list.map((p)=>{
          p
        })
      }
    );
     
  }

    

    
  
}
