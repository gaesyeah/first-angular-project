import { Injectable } from '@angular/core';
import { HotelInterface } from '../interfaces/hotel-interface';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  url = 'http://localhost:3000/hotels';

  constructor() {}

  async getAllHotels(): Promise<HotelInterface[]> {
    const data = await fetch(this.url);

    return data.json();
  }

  async getHotelById(id: number): Promise<HotelInterface | undefined> {
    const data = await fetch(`${this.url}/${id}`);

    return data.json();
  }
}
