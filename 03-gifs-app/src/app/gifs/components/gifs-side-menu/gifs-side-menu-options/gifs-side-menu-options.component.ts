import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GifService } from 'src/app/gifs/services/gifs.service';
interface MenuOption {
  icon: string;
  label: string;
  route: string;
  sublabel: string;
}
@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './gifs-side-menu-options.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifsSideMenuOptionsComponent {
  gifsService = inject(GifService);

  menuOpcion: MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Treding',
      route: '/dashboard/trending',
      sublabel: 'gifs populars',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Search',
      route: '/dashboard/search',
      sublabel: 'Search for gifs',
    },
  ];
}
