import { Pipe, PipeTransform } from '@angular/core';
import { Hotel } from 'src/app/interfaces/hotel';


@Pipe({ name: 'searchByPrice'})


export class SearchByPriceFiltrationPipe implements PipeTransform {
  transform(hotels: Hotel[], searchText: number) {
    return hotels.filter(hotel => hotel.price >= searchText);
  }
  constructor() { }


}
