import { Component } from '@angular/core';
import { NewDataService } from '../service/new-data.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-table-editing',
  standalone: true,
  imports: [TableModule, CommonModule, FormsModule],
  templateUrl: './table-editing.component.html',
  styleUrl: './table-editing.component.css'
})
export class TableEditingComponent {
  jsonData: any
  column: any;
  uniqueKeys = new Set<string>();

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
    console.log(this.getUniqueKeys())
  }

  getUniqueKeys(): Set<string> {
    

      Object.keys(this.jsonData[0]).forEach((key) => {
        this.uniqueKeys.add(key);
      });

      return (this.uniqueKeys);
  }
}
