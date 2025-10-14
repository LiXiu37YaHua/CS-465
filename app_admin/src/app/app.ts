import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripListingComponent } from './trip-listing/trip-listing';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TripListingComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'Travlr Getaways Admin';
}
