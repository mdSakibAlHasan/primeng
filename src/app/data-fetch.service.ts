import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
// import { TreeNodeData } from './treeNodeData';


@Injectable({
  providedIn: 'root'
})
export class DataFetchService implements OnInit{
 
  jsonURL = "assets/new.json"
  jsonData : any;
  constructor(private http: HttpClient) {
    this.http.get("assets/Catchment.json").subscribe((code)=>{
      this.jsonData = code;
      console.log(code);
      // this.generateTree();
    })
  }

  ngOnInit(): void {
    // this.http.get("assets/Catchment.json").subscribe((code)=>{
    //   this.jsonData = code;
    //   console.log(code);
    //   // this.generateTree();
    // })
  }

  getJsonData(){
    return this.http.get(this.jsonURL);
  }


  

  generateTree(){
    if (this.jsonData) {
      const treeNodes : TreeNode[] = []      //for root node only
      const map = new Map<String, TreeNode>()     //all node store its children node
      
      this.jsonData.forEach((element: { Name: any; Code: any; ParentId: any; Id: any; }) => {
        map.set(element.Id, {label: element.Name, key: element.Id, children: []})
        //console.log(element.Id," ",element.Name)
      });

      


      this.jsonData.forEach((element: any) =>{
        const node = map.get(element.Id);
        if(element.ParentId === null && node){
          treeNodes.push(node);
        }else{
          const parentNode= map.get(element.ParentId);
          if(parentNode && node){
            parentNode.children?.push(node)
          }
        }
      })
      this.printTree(treeNodes)
      console.log("retun something")
      return treeNodes;
    }
    console.log("return null");
    return null
  }

  printTree(nodes: any){
    for(let node of nodes){
      console.log(node.label,"  ", node.children?.length)
      if(node.children?.length && node.children?.length>0){
        for(let n of node.children){
          console.log(n.label, " " ,"  ", n.children?.length)
        }
      }
    }
  }
}
