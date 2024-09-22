import { Component } from '@angular/core';
import { SelectedHotelComponent } from '../../components/selected-hotel/selected-hotel.component';

@Component({
  selector: 'app-hotel',
  standalone: true,
  imports: [SelectedHotelComponent],
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.css',
})
export class HotelComponent {}
