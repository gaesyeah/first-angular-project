import { Component, Input } from '@angular/core';
import { HotelInterface } from '../../../interfaces/hotel-interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hotel-component',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.css',
})
export class HotelComponent {
  @Input() hotelData!: HotelInterface;
}
