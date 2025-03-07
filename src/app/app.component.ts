import { Component } from '@angular/core';
import { EventCountdownComponent } from './event-countdown/event-countdown.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [EventCountdownComponent], // ✅ Import the countdown component
})
export class AppComponent {
  title = 'Event Countdown App';
}
