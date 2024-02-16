import { Component, Input, OnInit, SimpleChanges, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-child-2',
  standalone: true,
  imports: [FormsModule, DropdownModule],
  templateUrl: './child-2.component.html',
  styleUrl: './child-2.component.css'
})
export class Child2Component implements OnInit{
  @Input() data: any
 

  cities: any;

  selectedCity:any;

  ngOnInit() {
      this.cities = [
          { name: 'New York', code: 'NY' },
          { name: 'Rome', code: 'RM' },
          { name: 'London', code: 'LDN' },
          { name: 'Istanbul', code: 'IST' },
          { name: 'Paris', code: 'PRS' }
      ];
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.selectedCity," ", changes);
  }

  changeData(){
    console.log(this.selectedCity)
    this.data.set(this.selectedCity.name);
  }
}
