import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-dropdown-test',
  standalone: true,
  imports: [DropdownModule, ReactiveFormsModule, FormsModule],
  templateUrl: './dropdown-test.component.html',
  styleUrl: './dropdown-test.component.css'
})
export class DropdownTestComponent {
  cities: City[] | undefined;

    selectedCity: City | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}
