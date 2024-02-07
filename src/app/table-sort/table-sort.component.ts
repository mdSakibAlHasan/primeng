import { Component } from '@angular/core';
import { NewDataService } from '../service/new-data.service';
import { Table, TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

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
  selectedCategories: any[][] = [];
  selectedColumn: any

    categories: any[] = [
       "Acending","Decending", "NoSort"
    ];

  constructor(private fetchData: NewDataService) {
    this.jsonData = fetchData.getData();
  }

  ngOnInit() {
    this.column = [
        { field: 'Name', header: 'Name', index: 0 },
        { field: 'Code', header: 'Code' , index: 1 },
        { field: 'UniqueCode', header: 'Unique code' ,index: 2 },
        { field: 'CreateTime', header: 'Create time', index: 3 }
    ];
  }

  saveData(){
    console.log(this.jsonData);
  }


  changeValue(value: any) {  
    if(this.selectedCategories[this.selectedColumn].length === 2) {
      this.selectedCategories[this.selectedColumn] = [value]; //as selectedValue is array
    } 
    console.log(value," sort of ", this.column[this.selectedColumn].field)
  }

  customSort(col: number) {
    this.selectedColumn = col;
  }
}
