import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {  Passenger } from "src/assets/passengers";


const URL = "http://localhost:3000/passengers";
@Injectable({
  providedIn: 'root',
})
export class PassengerService {
  
  private passengers  
  constructor(private http:HttpClient) {}

  public getPassengers(): Observable<Passenger[]> {
    
    this.passengers = this.http.get<Passenger[]>(URL);
    return this.passengers;
  }

  public editPassenger( passenger : Passenger) : Observable<Passenger> {
    return this.http.put<Passenger>(`${URL}/${passenger.id}`,passenger)
  }

  removePassenger(id: number): Observable<any | void> {
    return this.http.delete(`${URL}/${id}` , this.customOptions());
  }  

  customOptions()  {
    const options = {
      headers: new HttpHeaders({
        'content-type' : 'application/json'
      })
    }
    return options
  }
    
  
}
