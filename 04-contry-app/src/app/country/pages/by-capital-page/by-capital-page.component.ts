import { Component, inject, resource, signal } from '@angular/core';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { CountryService } from '../../services/country.service';

import type { Country } from '../../interfaces/country.interface';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {
  contryService = inject(CountryService);
  query = signal(' ');

  countryResource = resource({
    request: () => ({ query: this.query() }),
    loader: async ({ request }) => {
      if (!request.query) return [];
      return await firstValueFrom(
        this.contryService.serchByCapital(request.query)
      );
    },
  });

  /*isLoading = signal(false);
  isError = signal<string | null>(null);
  countries = signal<Country[]>([]);

  onSearch(query: string) {
    if (this.isLoading()) return;

    this.isLoading.set(true);
    this.isError.set(null);

    this.contryService.serchByCapital(query).subscribe({
      next: (countries) => {
        this.countries.set(countries);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.isLoading.set(false);
        this.isError.set(err);
        this.countries.set([]);
      },
    });
  }*/
}
