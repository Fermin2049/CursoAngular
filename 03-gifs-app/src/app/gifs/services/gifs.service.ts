// 📦 Importaciones
import { Gif } from './../interface/gif.interface';
import { GifMapper } from './../mapper/gif.mapper';
import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interface/giphy.interfaces';
import { map, tap } from 'rxjs';

// 🧠 Utilidad: carga desde localStorage
const loadFromLocalStorage = () => {
  const gifsFromLocalStorage = localStorage.getItem('gifsHistory');
  if (!gifsFromLocalStorage) return {};

  try {
    return JSON.parse(gifsFromLocalStorage);
  } catch (error) {
    console.error('Error parsing gifs history from local storage', error);
    return {};
  }
};

@Injectable({ providedIn: 'root' })
export class GifService {
  // 🧪 Inyección de dependencias
  private http = inject(HttpClient);

  // 🔁 Signals
  trendingGifs = signal<Gif[]>([]);
  tredingGifsLoading = signal(false);
  serachHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());
  private trendingPage = signal(0);

  // 🧮 Computed properties
  serachHistoryKey = computed(() => Object.keys(this.serachHistory()));
  trendingGifGroup = computed<Gif[][]>(() => {
    const groups = [];
    for (let i = 0; i < this.trendingGifs().length; i += 3) {
      groups.push(this.trendingGifs().slice(i, i + 3));
    }
    return groups;
  });

  // 💾 Efecto para guardar automáticamente en localStorage
  saveGifsToLocalStorage = effect(() => {
    const historyString = JSON.stringify(this.serachHistory());
    localStorage.setItem('gifsHistory', historyString);
  });

  // 🚀 Constructor
  constructor() {
    this.loadTrendingGifs();
  }

  // 🔄 Cargar GIFs populares (trending)
  loadTrendingGifs() {
    if (this.tredingGifsLoading()) return;
    this.tredingGifsLoading.set(true);

    this.http
      .get<GiphyResponse>(`${environment.giphyApiUrl}/gifs/trending`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: 20,
          offset: this.trendingPage() * 20,
        },
      })
      .subscribe((response) => {
        const gifs = GifMapper.mapGiphyItemToGifArray(response.data);
        this.trendingGifs.update((currentGifs) => [...currentGifs, ...gifs]);
        this.trendingPage.update((page) => page + 1);
        this.tredingGifsLoading.set(false);
      });
  }

  // 🔍 Buscar GIFs por query
  searchGifs(query: string) {
    return this.http
      .get<GiphyResponse>(`${environment.giphyApiUrl}/gifs/search`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: 20,
          q: query,
        },
      })
      .pipe(
        map(({ data }) => data),
        map((intems) => GifMapper.mapGiphyItemToGifArray(intems)),
        tap((items) => {
          this.serachHistory.update((history) => ({
            ...history,
            [query.toLowerCase()]: items,
          }));
        })
      );
  }

  // 📚 Obtener historial de búsqueda
  getHistoryGifs(query: string): Gif[] {
    return this.serachHistory()[query] ?? [];
  }
}
