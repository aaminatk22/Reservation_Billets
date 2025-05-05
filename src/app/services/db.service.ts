import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { Reservation } from '../models/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class DbService extends Dexie {
  reservations: Dexie.Table<Reservation, number>;

  constructor() {
    super('TicketReservationDB');

    this.version(1).stores({
      reservations: '++id,name,email,destination,date,passengers'
    });

    this.reservations = this.table('reservations');
  }
}
