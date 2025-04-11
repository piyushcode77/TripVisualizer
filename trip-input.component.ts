import { Component, EventEmitter, Output } from '@angular/core';
import { Trip } from '../models/trip.model';

@Component({
  selector: 'app-trip-input',
  templateUrl: './trip-input.component.html',
  styleUrls: ['./trip-input.component.css']
})
export class TripInputComponent {
  startPoint = '';
  endPoint = '';

  @Output() newTrip = new EventEmitter<Trip>();

  addTrip() {
    if (this.startPoint && this.endPoint) {
      const trip: Trip = {
        from: this.startPoint.toUpperCase(),
        to: this.endPoint.toUpperCase(),
        displayFrom: this.startPoint.slice(0, 3).toUpperCase(),
        displayTo: this.endPoint.slice(0, 3).toUpperCase(),
        level: 1,
        isArrow: false,
        color: ''
      };
      this.newTrip.emit(trip);
      this.startPoint = '';
      this.endPoint = '';
    }
  }
}
