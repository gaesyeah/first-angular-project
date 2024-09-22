import { Component, inject } from '@angular/core';
import { HotelService } from '../../services/hotel/hotel.service';
import { ActivatedRoute } from '@angular/router';
import { HotelInterface } from '../../interfaces/hotel-interface';

@Component({
  selector: 'app-selected-hotel',
  standalone: true,
  imports: [],
  templateUrl: './selected-hotel.component.html',
  styleUrl: './selected-hotel.component.css',
})
export class SelectedHotelComponent {
  hotelData: HotelInterface | undefined;
  hotelService: HotelService = inject(HotelService);
  route: ActivatedRoute = inject(ActivatedRoute);

  constructor() {
    const id = Number(this.route.snapshot.params['id']);

    this.hotelService.getHotelById(id).then((hotel) => {
      this.hotelData = hotel;
    });
  }
}
