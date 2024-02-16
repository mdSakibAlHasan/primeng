import { Component, Input, OnInit, SimpleChanges, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-2',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child-2.component.html',
  styleUrl: './child-2.component.css'
})
export class Child2Component {
  @Input() data: any
 
  changeData(changeValue: string){
    this.data.set(changeValue);
  }
}
