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
date1 : Date;
date2: Date;
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

  constructor(    
    private route: ActivatedRoute,
    private hotelApi :HotelService 
    ) { }
 
  ngOnInit() {
    this.getPosts();

  }
 getPosts(){
   this.route.queryParams.subscribe(params => {
  this.date1 = moment(params.start).toDate();
  this.date2 = moment(params.end ).toDate();
  });
   this.hotelApi.getPosts().subscribe( res =>{
    this.hotels= res.hotels
    //  resHotels.forEach(hotel => {
    //    console.log("1" , hotel )
    //   hotel.availability.forEach(Vdate =>{
    //     console.log("2" , Vdate )
    //     console.log("3" , Vdate.from )
    //     console.log("6" , Vdate.to )

    //     console.log("4" , this.date1 )
    //     console.log("5" , this.date2 )
    //     console.log("res1 ==>",
    //     moment(Vdate.to).isAfter(moment(Vdate.from)));
    // if (moment(Vdate.to).isAfter(moment(Vdate.from)) 
    // // && moment(this.date2 ).isAfter(moment(Vdate.to))
    //     )
    //    {
    //     this.hotels.push(hotel);
       
    //    }
    //   })
    //  });
     error => console.log("Erorr",error) 
   })
 }
 getMeasures(){
   console.log(this.measure)
 }
 onFilter(event){
   this.Filterd= this.hotels;
  console.log("hotels ==>",this.hotels)
  console.log("resFilter--->" , event.target.value)
  
   
 }

}
