import { Component, inject } from '@angular/core';
import { HotelComponent } from '../hotel/hotel.component';
import { CommonModule } from '@angular/common'; /* necessario para utilizar o ngFor para renderizar componentes dinamicamente */
import { HotelInterface } from '../../../interfaces/hotel-interface';
import { HotelService } from '../../../services/hotel/hotel.service';

@Component({
  selector: 'app-content-component',
  standalone: true,
  imports: [HotelComponent, CommonModule, HotelComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  hotelList: HotelInterface[] = [];
  hotelService: HotelService =
    inject(HotelService); /* aqui ele esta injetando o serviço dos hoteis */

  constructor() {
    /* aqui ele esta pegando todos os cursos e guardando na variavel hotelList criada no topo dessa classe */
    this.hotelService.getAllHotels().then((hotel) => {
      this.hotelList = hotel;
    });
  }
}
