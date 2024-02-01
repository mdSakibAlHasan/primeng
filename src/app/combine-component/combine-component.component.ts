import { Component } from '@angular/core';
import { ViewComponent } from '../view/view.component';
import { TableViewComponent } from '../table-view/table-view.component';
import { SplitterModule } from 'primeng/splitter';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@Component({
  selector: 'app-combine-component',
  standalone: true,
  imports: [ViewComponent, TableViewComponent, SplitterModule, ScrollPanelModule],
  templateUrl: './combine-component.component.html',
  styleUrl: './combine-component.component.css'
})
export class CombineComponentComponent {
  tableData: any

  showTable(tableData:any){
    this.tableData = tableData;
    console.log(tableData," show here");
  }
}
