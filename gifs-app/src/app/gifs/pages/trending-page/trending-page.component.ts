import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  viewChild,
} from '@angular/core';
import { GifService } from '../../services/gifs.service';
import { ScrollStateService } from '../../services/scroll-state.service';

@Component({
  selector: 'app-trending-page',
  templateUrl: './trending-page.component.html',
})
export default class TrendingPageComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const scrollDiv = this.acrollDivRef()?.nativeElement;
    if (!scrollDiv) return;

    scrollDiv.scrollTop = this.scrollStateService.trendingScrollState();
  }
  gifsService = inject(GifService);
  scrollStateService = inject(ScrollStateService);

  acrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv');

  onScroll(event: Event) {
    const scrollDiv = this.acrollDivRef()?.nativeElement;
    if (!scrollDiv) return;

    const scrollTop = scrollDiv.scrollTop;
    const clientHeight = scrollDiv.clientHeight;
    const scrollHeight = scrollDiv.scrollHeight;

    const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight;

    this.scrollStateService.trendingScrollState.set(scrollTop);

    if (isAtBottom) {
      this.gifsService.loadTrendingGifs();
    }
  }
}
