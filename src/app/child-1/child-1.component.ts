import { Component, Input, SimpleChanges } from '@angular/core';
import { Child2Component } from '../child-2/child-2.component';

@Component({
  selector: 'app-child-1',
  standalone: true,
  imports: [Child2Component],
  templateUrl: './child-1.component.html',
  styleUrl: './child-1.component.css'
})
export class Child1Component {
  @Input() data: any
  
}
