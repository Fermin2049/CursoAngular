import { GifService } from './../../services/gifs.service';
import { Component, inject, signal } from '@angular/core';
import { GifsListComponent } from '../../components/gifs-list/gifs-list/gifs-list.component';
import { Gif } from '../../interface/gif.interface';

@Component({
  selector: 'app-search-page',
  imports: [GifsListComponent],
  templateUrl: './search-page.component.html',
})
export default class SearchPageComponent {
  gifService = inject(GifService);
  gifs = signal<Gif[]>([]);

  onSearch(query: string) {
    this.gifService.searchGifs(query).subscribe((resp) => {
      this.gifs.set(resp);
    });
  }
}
