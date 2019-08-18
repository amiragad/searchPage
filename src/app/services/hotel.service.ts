import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import 'rxjs/Rx' ;
import { Hotel } from '../interfaces/hotel';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
private _postUrl ="https://api.myjson.com/bins/tl0bp"
  constructor( private http: Http) {}

  getPosts() {
    return this.http
    .get(this._postUrl)
    .map((response : Response) =>{
      return response.json();
    })
    .catch(this.handleError)

  }
  private handleError(error : Response){
    return Observable.throw (error.statusText);
    
  }
}
