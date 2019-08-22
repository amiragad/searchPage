import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  days:any;
  start: Date ; 
  end: Date ;
  constructor( 
    private router: Router,) { }

  ngOnInit() {
  }
  setdays(){
   if(this.end && this.start){
   var start = moment(this.end);
   var end = moment(this.start);
   var d= moment.duration(start.diff(end)).asDays();
   this.days= d < 0 ? 0 : d;
 }

console.log("days--->",moment.duration(start.diff(end)).asDays())
  }i
  onSearch(){
    this.router.navigate(['/search'],{ queryParams:{
      start: this.start,
      end: this.end
    }});

  }
}
