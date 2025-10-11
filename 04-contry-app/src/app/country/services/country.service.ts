import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.interfaces';
import { map, Observable } from 'rxjs';
import type { Country } from '../interfaces/country.interface';
import { CountryMaaper } from '../mappers/country.mapper';

const baseUrl = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);

  serchByCapital(query: string): Observable<Country[]> {
    query = query.toLowerCase();
    return this.http
      .get<RESTCountry[]>(`${baseUrl}/capital/${query}`)
      .pipe(
        map((resp) => CountryMaaper.mapRestCpountyArrayToCountryArray(resp))
      );
  }
}
