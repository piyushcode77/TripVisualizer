import { Component } from '@angular/core';
import { Trip } from './models/trip.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tripList: Trip[] = [];

  onNewTrip(trip: Trip) {
    this.tripList.push(trip);
  }
}
