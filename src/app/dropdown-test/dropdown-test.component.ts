import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { DataFetchService } from '../service/data-fetch.service';
import { TreeSelectModule } from 'primeng/treeselect';
import { CommonModule } from '@angular/common';
import { NewDataService } from '../service/new-data.service';
import { CalendarModule } from 'primeng/calendar';


@Component({
  selector: 'app-dropdown-test',
  standalone: true,
  imports: [CommonModule,DropdownModule, ReactiveFormsModule, TreeSelectModule, CalendarModule],
  templateUrl: './dropdown-test.component.html',
  styleUrl: './dropdown-test.component.css'
})
export class DropdownTestComponent {
 
  treeData: any;
  formGroup!: FormGroup;
  selectedNode: any;
  maxDate: Date = new Date;
  minDate: Date = new Date;

  constructor(private dataFetch: DataFetchService, private newDataFetch: NewDataService){
    this.treeData = dataFetch.generateTree(newDataFetch.getData());
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
        selectedNodes: new FormControl(),
        dateSelect: new FormControl(),
        monthSelect: new FormControl()
    });
    this.maxDate.setFullYear(2024,2,15);    //Here month index start from 0
    this.minDate.setFullYear(2024,0,15);

    this.formGroup.get('monthSelect')?.disable();
  }

  submit(){
    console.log(this.maxDate)
    console.log(this.formGroup.value)
    // console.log(this.formGroup.value.dateSelect[1] - this.formGroup.value.dateSelect[1]);
    // this.selectedNode = this.formGroup.value.selectedNodes.label;
  }
   
}
