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
  hotels : Hotel[]=[];
  date1 : Date;
  date2: Date;
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
      let resHotels= res.hotels
      resHotels.forEach(hotel => {
       hotel.availability.forEach(Vdate =>{
   
     if (moment(this.date1).isAfter(moment(Vdate.from)) 
      && moment(Vdate.to).isAfter(moment(this.date2))
         )
        {
         this.hotels.push(hotel);
        
        }
       })
      });
      error => console.log("Erorr",error) 
    } )
  }
 getMeasures(){
   console.log(this.measure)
 }
 onFilter(event){
 }

}
