import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { TreeNode } from 'primeng/api';


@Injectable({
  providedIn: 'root'
})
export class DataFetchService {
 
  // jsonURL = "assets/Catchment.json"
  // jsonData : any;
  // constructor(private http: HttpClient) {
  //   this.http.get(this.jsonURL).subscribe((code)=>{
  //     this.jsonData = code;
  //   })
  // }

  

  generateTree(jsonData: any){
    if (jsonData) {
      const treeNodes : TreeNode[] = []      //for root node only
      const map = new Map<String, TreeNode>()     //all node store its children node
      
      jsonData.forEach((element: { Name: any; Code: any; ParentId: any; Id: any; }) => {
        map.set(element.Id, {label: element.Name, key: element.Id, children: []})
      });


      jsonData.forEach((element: any) =>{
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

      return treeNodes;
    }
   
    return null
  }

}
