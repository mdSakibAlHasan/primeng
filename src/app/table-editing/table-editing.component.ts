import { Component } from '@angular/core';
import { NewDataService } from '../service/new-data.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-table-editing',
  standalone: true,
  imports: [TableModule, CommonModule, FormsModule, ButtonModule],
  templateUrl: './table-editing.component.html',
  styleUrl: './table-editing.component.css'
})
export class TableEditingComponent {
  jsonData: any
  column: any;
  uniqueKeys = new Array<string>();
  cloneData: any = {}

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

  onRowEditInit(product: any) {
    this.cloneData[product.Code as string] = { ...product };
    console.log(this.cloneData);
  }

  onRowEditSave(product: any) {
    //console.log("save: ",product)
    delete this.cloneData[product.Code as string];
    //console.log("After save: ",product)
  }

  onRowEditCancel(product: any, index: number) {
    //console.log("Cancel: ",product)
    this.jsonData[index] = this.cloneData[product.Code as string];
    delete this.cloneData[product.Code as string];
    //console.log("After Cancel: ",product)
  }

  saveData(){
    console.log(this.jsonData); 
  }

}
