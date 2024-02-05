import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Location } from './model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewDataService {

  jsonURL = "../assets/data.txt"
  jsonData : any;
  constructor(private http: HttpClient) {
    console.log("Here are")
    this.getLocations().subscribe((code)=>{
      console.log(code)
      console.log("New data are here: ",JSON.parse(code.trim()));
      //this.jsonData = JSON.parse(code);
      
    })
  }

  getLocations(): Observable<any> {
    return this.http.get<any>(this.jsonURL, { responseType: 'text' as 'json', headers: { 'Content-Type': 'text/plain' }});
  }


}
