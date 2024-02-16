import { Component, Input, OnInit, SimpleChanges, effect } from '@angular/core';

@Component({
  selector: 'app-child-2',
  standalone: true,
  imports: [],
  templateUrl: './child-2.component.html',
  styleUrl: './child-2.component.css'
})
export class Child2Component {
  @Input() data: any
 
  changeData(){
    this.data.set("Change by child-2");
    //console.log("Button");
  }
}
