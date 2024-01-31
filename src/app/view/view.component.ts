import { Component, OnInit } from '@angular/core';
import { DataFetchService } from '../data-fetch.service';
import { TreeModule } from 'primeng/tree';
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
  newData: any;
  viewTree: boolean = false;
  
  
  constructor(private dataFetch: DataFetchService){}

  ngOnInit(): void {
    this.dataFetch.getJsonData().subscribe((data)=>{
      this.newData = data;
    })
  }

  view(){
    this.jsonData =  this.dataFetch.generateTree();
    this.viewTree = true;
  }



}
