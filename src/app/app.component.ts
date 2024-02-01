import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { TableViewComponent } from './table-view/table-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ViewComponent, TableViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'treeGenerate';
  tableData: any

  showTable(tableData:any){
    this.tableData = tableData;
    console.log(tableData," show here");
  }
}
