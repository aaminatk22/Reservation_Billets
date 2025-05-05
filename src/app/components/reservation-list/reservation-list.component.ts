import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';
import { Reservation } from '../../models/reservation.model';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss']
})
export class ReservationListComponent implements OnInit {
  reservations: Reservation[] = [];

  constructor(private dbService: DbService) {}

  ngOnInit() {
    this.loadReservations();
  }

  loadReservations() {
    this.dbService.reservations.toArray()
      .then(data => {
        this.reservations = data;
      })
      .catch(error => {
        console.error('Erreur lors du chargement des réservations:', error);
      });
  }

  cancelReservation(id: number | undefined) {
    if (id) {
      this.dbService.reservations.delete(id)
        .then(() => {
          this.loadReservations();
        })
        .catch(error => {
          console.error('Erreur lors de l\'annulation de la réservation:', error);
        });
    }
  }
}
