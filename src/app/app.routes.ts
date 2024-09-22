import { Routes } from '@angular/router';
import { HotelComponent } from './pages/hotel/hotel.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'hotel/:id', component: HotelComponent },
];
