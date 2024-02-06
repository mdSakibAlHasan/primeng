import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewDataService {

  jsonURL = "assets/Catchment.json"
  jsonData : any;
  constructor(private http: HttpClient) {
    this.http.get(this.jsonURL).subscribe((code)=>{
      this.jsonData = code;
    })
  }

  getData(){
    return this.jsonData;
  }

  getAllData(){
    return this.http.get(this.jsonURL);
  }


}
