import { CountryService } from './../../services/country.service';
import { Component, inject, signal } from '@angular/core';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { Region } from '../../interfaces/region.list';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';

@Component({
  selector: 'app-by-region-page',
  imports: [CountryListComponent],
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent {
  countryService = inject(CountryService);

  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];

  selectecRegion = signal<Region | null>(null);

  countryResource = rxResource({
    request: () => ({ region: this.selectecRegion() }),
    loader: ({ request }) => {
      if (!request.region) return of([]);

      return this.countryService.searchByRegion(request.region);
    },
  });
}
