import { Component } from '@angular/core';
import { NewDataService } from '../service/new-data.service';
import { Table, TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SortEvent } from 'primeng/api';

@Component({
  selector: 'app-table-sort',
  standalone: true,
  imports: [TableModule, CommonModule, OverlayPanelModule, CheckboxModule, FormsModule, ButtonModule],
  templateUrl: './table-sort.component.html',
  styleUrl: './table-sort.component.css'
})
export class TableSortComponent {
  jsonData: any
  column: any;
  selectedCategories: any[] = [];
  selectedColumn: any

    categories: any[] = [
       "Acending","Decending", "NoSort"
    ];

  constructor(private fetchData: NewDataService) {
    this.jsonData = fetchData.getData();
  }

  ngOnInit() {
      this.column = [
          { field: 'Name', header: 'Name' },
          { field: 'Code', header: 'Code' },
          { field: 'UniqueCode', header: 'Unique code' },
          { field: 'CreateTime', header: 'Create time' }
      ];
  }

  saveData(){
    console.log(this.jsonData);
  }

  clear(table: Table) {
    table.clear();
  }

  changeValue(value: any) {  
    if(this.selectedCategories.length === 2) {
      this.selectedCategories = [value]; //as selectedValue is array
    } 
    console.log(this.selectedCategories,"  value ",value," column ", this.selectedColumn)
  }

  customSort(event: SortEvent) {
    // event.data.sort((data1, data2) => {
    //     let value1 = data1[event.field];
    //     let value2 = data2[event.field];
    //     let result = null;

    //     if (value1 == null && value2 != null) result = -1;
    //     else if (value1 != null && value2 == null) result = 1;
    //     else if (value1 == null && value2 == null) result = 0;
    //     else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2);
    //     else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;

    //     return event.order * result;
    // });
}

}
