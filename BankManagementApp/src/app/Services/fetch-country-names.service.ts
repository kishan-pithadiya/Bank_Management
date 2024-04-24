import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchCountryNamesService {

  constructor(private http: HttpClient) {}

  countryapiUrl = "https://restcountries.com/v2/all";

  fetchcountryname():Observable<any[]>{
    return this.http.get<any[]>(this.countryapiUrl);
  }
}
