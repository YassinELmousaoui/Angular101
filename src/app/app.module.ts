import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { PassengersModule } from "./passengers/passenger.module";
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, PassengersModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
