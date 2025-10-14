import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Trip } from '../models/trip';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  //  Make sure your Express backend runs on this port (usually 3000)
  private baseUrl = 'http://localhost:3000/api/trips';

  constructor(private http: HttpClient) { }

  //  GET all trips
  getTrips(): Promise<Trip[]> {
    return firstValueFrom(this.http.get<Trip[]>(this.baseUrl));
  }

  //  GET one trip by ID
  getTripById(tripId: string): Promise<Trip> {
    return firstValueFrom(this.http.get<Trip>(`${this.baseUrl}/${tripId}`));
  }

  //  POST new trip (Add Trip)
  addTrip(trip: Trip): Promise<Trip> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return firstValueFrom(this.http.post<Trip>(this.baseUrl, trip, { headers }));
  }

  //  PUT (Edit Trip)
  updateTrip(tripId: string, trip: Trip): Promise<Trip> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return firstValueFrom(this.http.put<Trip>(`${this.baseUrl}/${tripId}`, trip, { headers }));
  }

  // DELETE (Remove Trip)
  deleteTrip(tripId: string): Promise<any> {
    return firstValueFrom(this.http.delete(`${this.baseUrl}/${tripId}`));
  }
}
