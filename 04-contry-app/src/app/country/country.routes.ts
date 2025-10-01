import { Route } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ContryLayoutComponent } from './layouts/ContryLayout/ContryLayout.component';

export const countryRoutes: Route[] = [
  {
    path: '',
    component: ContryLayoutComponent,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalPageComponent,
      },
      {
        path: '**',
        redirectTo: 'by-capital',
      },
    ],
  },
];
export default countryRoutes;
