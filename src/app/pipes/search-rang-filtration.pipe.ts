import { Pipe, PipeTransform } from '@angular/core';
import { Hotel } from 'src/app/interfaces/hotel';


@Pipe({ name: 'searchByRang' })


export class SearchByRangFiltrationPipe implements PipeTransform {
  transform(hotels: Hotel[], fromDate:Date , toDate:Date) {

    return hotels.filter(hotel =>hotel.availability.filter(res =>{ 
       res.from >= fromDate.toString() && res.to >= toDate.toString()
    })
    );
  }
  constructor() { }


}
