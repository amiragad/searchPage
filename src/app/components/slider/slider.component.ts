import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  days:any;
   start: Date = new Date ("10/10/2020"); 
  end: Date = new Date ("10/10/2020");
  constructor() { }

  ngOnInit() {
  }
  setdays(){
   

var start = moment(this.end);
var end = moment(this.start);
//Difference in number of days
this.days= moment.duration(start.diff(end)).asDays();


console.log("days--->",moment.duration(start.diff(end)).asDays())
  }
}
