import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';
import { ReservationListComponent } from './components/reservation-list/reservation-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/reserver', pathMatch: 'full' },
  { path: 'reserver', component: ReservationFormComponent },
  { path: 'reservations', component: ReservationListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
