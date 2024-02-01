import { Component, OnInit } from '@angular/core';
import { DataFetchService } from '../data-fetch.service';
import { TreeModule } from 'primeng/tree';
import { TreeNode } from 'primeng/api';
// import { JsonDataResponse, TreeNodeData } from '../treeNodeData';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [TreeModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit{
  jsonData: any;
  selectedFile!: TreeNode;
  
  
  constructor(private dataFetch: DataFetchService){}

  ngOnInit(): void {
    this.jsonData =  this.dataFetch.generateTree();
  }

  nodeSelect(event: any) {
    // this.messageService.add({ severity: 'info', summary: 'Node Selected', detail: event.node.label });
    console.log("Selected node is: ",event.node.label," and key is ",event.node.key)
    console.log("Selected node ",this.selectedFile);
  }


}
