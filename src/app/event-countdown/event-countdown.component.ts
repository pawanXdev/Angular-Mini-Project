import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Event {
  name: string;
  date: Date;
}

@Component({
  selector: 'app-event-countdown',
  standalone: true,
  templateUrl: './event-countdown.component.html',
  styleUrls: ['./event-countdown.component.css'],
  imports: [NgIf, NgFor, FormsModule], // ✅ Import FormsModule here
})
export class EventCountdownComponent {
  events: Event[] = [];
  eventName: string = '';
  eventDate: string = '';

  // Add a new event
  addEvent() {
    if (this.eventName && this.eventDate) {
      const newEvent: Event = {
        name: this.eventName,
        date: new Date(this.eventDate),
      };
      this.events.push(newEvent);
      this.eventName = '';
      this.eventDate = '';
    }
  }

  // Calculate the time left for each event
  getTimeLeft(eventDate: Date): string {
    const now = new Date();
    const timeDifference = eventDate.getTime() - now.getTime();

    if (timeDifference <= 0) {
      return 'Event has already passed';
    }

    const daysLeft = Math.floor(timeDifference / (1000 * 3600 * 24));
    const hoursLeft = Math.floor((timeDifference % (1000 * 3600 * 24)) / (1000 * 3600));
    const minutesLeft = Math.floor((timeDifference % (1000 * 3600)) / (1000 * 60));

    return `${daysLeft} days, ${hoursLeft} hours, ${minutesLeft} minutes left`;
  }
}
