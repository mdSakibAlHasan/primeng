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
[x: string]: any;
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


  changeValue(value: any) {  
    if(this.selectedCategories.length === 2) {
      this.selectedCategories = [value]; //as selectedValue is array
    } 
    console.log(value," sort of ", this.selectedColumn.field)
  }

  customSort(col: string) {
   this.selectedColumn = col;
  }

}
