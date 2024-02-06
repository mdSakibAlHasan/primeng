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
  uniqueKeys = new Array<string>();

  constructor(private fetchData: NewDataService) {}

  ngOnInit() {
    this.fetchData.getAllData().subscribe(
      (data: any) => {
        this.jsonData = data;
        this.uniqueKeys = Object.keys(this.jsonData[0]);
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );

   
  }

  saveData(){
    console.log(this.jsonData); 
  }

}
