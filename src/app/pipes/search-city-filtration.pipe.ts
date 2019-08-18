import { Pipe, PipeTransform } from '@angular/core';
import { Hotel } from 'src/app/interfaces/hotel';


@Pipe({ name: 'searchByCity'})


export class SearchByCityFiltrationPipe implements PipeTransform {
  transform(hotels: Hotel[], searchText: string) {
    return hotels.filter(hotel => hotel.city.indexOf(searchText) !== -1);
  }
  constructor() { }


}
