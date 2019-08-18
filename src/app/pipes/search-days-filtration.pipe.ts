import { Pipe, PipeTransform } from '@angular/core';
import { Hotel } from 'src/app/interfaces/hotel';


@Pipe({ name: 'searchByDays'})


export class SearchByDaysFiltrationPipe implements PipeTransform {
  transform(hotels: Hotel[], days: any) {
    return hotels.filter(hotel => hotel.availability.filter(res => { 
   new Date(res.to).valueOf() - new Date(res.from).valueOf()
     >= days
    }
    ));
  }
  constructor() { }


}
