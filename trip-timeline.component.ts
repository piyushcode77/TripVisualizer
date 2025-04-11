import { Component, Input, OnChanges } from '@angular/core';
import { Trip } from '../models/trip.model';

@Component({
  selector: 'app-trip-timeline',
  templateUrl: './trip-timeline.component.html',
  styleUrls: ['./trip-timeline.component.css']
})
export class TripTimelineComponent implements OnChanges {
  @Input() trips: Trip[] = [];

  ngOnChanges() {
    this.assignLevelsAndStyles();
  }

  assignLevelsAndStyles() {
    for (let i = 0; i < this.trips.length; i++) {
      const curr = this.trips[i];
      const prev = this.trips[i - 1];

      if (i > 0) {
        if (prev.to === curr.from) {
          curr.level = 1;
          curr.isArrow = false;
        } else if (prev.from === curr.from && prev.to === curr.to) {
          curr.level = 2;
          curr.isArrow = false;
        } else {
          curr.level = 1;
          curr.isArrow = true;
        }
      } else {
        curr.level = 1;
        curr.isArrow = false;
      }

      curr.color = ['#5c6bc0', '#42a5f5', '#ffa726'][curr.level - 1] || '#aaa';
    }
  }
}
