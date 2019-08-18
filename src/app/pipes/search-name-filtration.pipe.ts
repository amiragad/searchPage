import { Pipe, PipeTransform } from '@angular/core';
import { Hotel } from 'src/app/interfaces/hotel';


@Pipe({ name: 'searchByName'})


export class SearchByNameFiltrationPipe implements PipeTransform {
  transform(hotels: Hotel[], searchText: string) {
    return hotels.filter(hotel => hotel.name.indexOf(searchText) !== -1);
  }
  constructor() { }


}
