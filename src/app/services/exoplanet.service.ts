import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exoplanet } from '../models/exoplanet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExoplanetService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = "https://api-exoplanets.herokuapp.com/exoplanets";

  public getAll(): Observable<Exoplanet[]> {
    return this.http.get<Exoplanet[]>(this.baseUrl);
  }
}
