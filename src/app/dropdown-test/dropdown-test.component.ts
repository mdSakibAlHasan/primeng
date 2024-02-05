import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { DataFetchService } from '../service/data-fetch.service';
import { TreeSelectModule } from 'primeng/treeselect';
import { CommonModule } from '@angular/common';
import { NewDataService } from '../service/new-data.service';


@Component({
  selector: 'app-dropdown-test',
  standalone: true,
  imports: [CommonModule,DropdownModule, ReactiveFormsModule, TreeSelectModule],
  templateUrl: './dropdown-test.component.html',
  styleUrl: './dropdown-test.component.css'
})
export class DropdownTestComponent {
 
  treeData: any;
  formGroup!: FormGroup;
  selectedNode: any;

  constructor(private dataFetch: DataFetchService, private newDataFetch: NewDataService){
    this.treeData = dataFetch.generateTree(newDataFetch.getData());
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
        selectedNodes: new FormControl()
    });
  }

  submit(){
    console.log(this.formGroup.value.selectedNodes.label)
    this.selectedNode = this.formGroup.value.selectedNodes.label;
  }
   
}
