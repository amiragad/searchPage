import { Component, OnInit ,Pipe} from '@angular/core';
import { Hotel } from 'src/app/interfaces/hotel';
import { HotelService } from 'src/app/services/hotel.service';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
hotels : any[];
measure:string = 'all';
Filterd: any[];
cityFilter :string='';
nameFilter :string='';
priceFilter :number=0;

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
public start: Date = new Date ("10/10/2020"); 
public end: Date = new Date ("10/10/2020");
  constructor( private hotelApi :HotelService ) { }
 
  ngOnInit() {
    this.getPosts();

  }
 getPosts(){
   this.hotelApi.getPosts().subscribe( res =>{
     this.hotels= res.hotels
     console.log("res1 ==>",this.hotels)
     ,

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
