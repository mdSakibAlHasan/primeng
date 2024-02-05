import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { DataFetchService } from '../data-fetch.service';
import { TreeModule } from 'primeng/tree';


@Component({
  selector: 'app-view',
  standalone: true,
  imports: [TreeModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit{
  @Input() selectMode: string = "single"
  @Output() newItemEvent = new EventEmitter<string>();
  
  jsonData: any;
  selectedFile!: any;
  
  
  constructor(private dataFetch: DataFetchService){}

  ngOnInit(): void {
    this.jsonData =  this.dataFetch.generateTree();
  }

  nodeSelect(event: any) {
      console.log("Selected node is: ", event.node.label, " and key is ", event.node.key);
      console.log("Selected node ", this.selectedFile);
      this.sendTableData();
  }

  sendTableData(){
    this.newItemEvent.emit(this.selectedFile)
  }


}
