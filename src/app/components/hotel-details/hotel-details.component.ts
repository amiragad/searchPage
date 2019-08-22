import { Component, OnInit , Input, ViewChild} from '@angular/core';
import { Hotel } from 'src/app/interfaces/hotel';
import { HotelService } from 'src/app/services/hotel.service';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})

export class HotelDetailsComponent implements OnInit {
  @Input('measure') measure : string ='all';
  @Input('cityFilter') cityFilter : string ='all';
  @Input('nameFilter') nameFilter : string ='all';
  @Input('priceFilter') priceFilter : number =0;
  hotels : Hotel[];
  constructor(    
    private route: ActivatedRoute,
    private hotelApi :HotelService 
    ) { }
 
  ngOnInit() {
    this.getPosts();

  }
 getPosts(){
  this.hotelApi.getPosts().subscribe( res =>{
     this.hotels= res.hotels  ,
     error => console.log("Erorr",error) 
   })
 }
 getMeasures(){
   console.log(this.measure)
 }
 onFilter(event){
 }

}
