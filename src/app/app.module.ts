import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';
import { ReservationListComponent } from './components/reservation-list/reservation-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservationFormComponent,
    ReservationListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
