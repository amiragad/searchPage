import { Component, OnInit ,Pipe, ViewChild} from '@angular/core';
import { Hotel } from 'src/app/interfaces/hotel';
import { HotelService } from 'src/app/services/hotel.service';
import { map, filter } from 'rxjs/operators';
import { HomeComponent } from '../home/home.component';
import * as moment from 'moment';
import { SliderComponent } from '../slider/slider.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
hotels : any[];
measure : string = 'all';
Filterd : any[];
cityFilter : string='';
nameFilter : string='';
priceFilter : number=0;

options = [
  {
    measure: 'all',
    display: 'No Sort'
  },
  {
    measure: 'name',
    display: 'Name'
  },
  {
    measure: 'price',
    display: 'Price'
  } 
];
filterOptions = [
  {
    measure: 'all',
    display: 'No Filter'
  },
  {
    measure: 'city',
    display: 'City'
  } 
]

  constructor( ) { }
 
  ngOnInit() {

  }

}
