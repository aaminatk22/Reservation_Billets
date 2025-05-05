import { Component } from '@angular/core';
import { DbService } from '../../services/db.service';
import { Reservation } from '../../models/reservation.model';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss']
})
export class ReservationFormComponent {
  reservation: Reservation = {
    name: '',
    email: '',
    destination: '',
    date: '',
    passengers: 1
  };

  successMessage = '';

  constructor(private dbService: DbService) {}

  onSubmit() {
    this.dbService.reservations.add(this.reservation)
      .then(() => {
        this.successMessage = 'Réservation effectuée avec succès!';
        this.resetForm();
        setTimeout(() => this.successMessage = '', 3000);
      })
      .catch(error => {
        console.error('Erreur lors de la réservation:', error);
      });
  }

  resetForm() {
    this.reservation = {
      name: '',
      email: '',
      destination: '',
      date: '',
      passengers: 1
    };
  }
}
