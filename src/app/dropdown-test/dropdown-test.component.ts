import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { DataFetchService } from '../data-fetch.service';
import { TreeSelectModule } from 'primeng/treeselect';
import { CommonModule } from '@angular/common';


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

  constructor(private dataFetch: DataFetchService){
    this.treeData = dataFetch.generateTree();
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
        selectedNodes: new FormControl()
    });
  }
   
}
