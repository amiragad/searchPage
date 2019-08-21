import { Pipe, PipeTransform } from '@angular/core';
import { Hotel } from 'src/app/interfaces/hotel';
import * as moment from 'moment';


@Pipe({ name: 'searchByRang' })


export class SearchByRangFiltrationPipe implements PipeTransform {
  transform(hotels: Hotel[], fromDate:Date , toDate:Date) {
console.log("1")
    return hotels.filter(hotle =>{
      hotle.availability.filter( res => {
        var date1 = moment(res.from).format('DD-MM-YYYY');
        var date2 = moment(res.to).format('DD-MM-YYYY');
        console.log("2")
        var from = moment(fromDate).format('DD-MM-YYYY');
        var  to = moment(toDate).format('DD-MM-YYYY');
        console.log("3")

         moment(res.from).isAfter(moment(from)) ;
console.log("----->", moment(res.to).isAfter(moment(to)) )
      })
    }

    )
    // (hotel =>hotel.availability.filter(res =>{ 
    //    res.from >= fromDate.toString() && res.to >= toDate.toString()
    // })
    // );
  }
  constructor() { }


}
