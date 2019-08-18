import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  contact: any ={
    email:'',
    message:''
  }
  constructor() { }

  ngOnInit() {
  }
  async  onSubmit(form : NgForm){
    if(form.valid){
      alert( " Your Email : " + form.value.email 
      + " Your Message :" + form.value.message);
    }
    else {
      alert("your informations are not valid")
    }
  }

}
