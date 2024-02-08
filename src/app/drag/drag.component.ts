import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DragDropModule } from 'primeng/dragdrop';

@Component({
  selector: 'app-drag',
  standalone: true,
  imports: [DragDropModule, CommonModule],
  templateUrl: './drag.component.html',
  styleUrl: './drag.component.css'
})
export class DragComponent {

    items:any
    dragItem: any
    
    constructor() { }
    
    ngOnInit() {
       this.items = [1,2,3,4,5,6,7,8,9]
    }
    
    startDrag(item:any){
        this.dragItem = item;
    }

    
    dropItem(event: any,dropIndex: any){
        let index = this.findSelecteItem(this.dragItem);
        this.orderItem(this.items, index, dropIndex);
        this.dragItem = null;
        
        event.target.classList.remove("active");
    }
    
    enterDrag(event: any){
        event.target.classList.add("active");
    }

    leaveDrag(event: any){
        event.target.classList.remove("active");
    }

    endDrag(){
        this.dragItem = null
    }
    

    findSelecteItem(item: any){
        let index = -1;
        for(let i = 0; i < this.items.length; i++) {
            if(item === this.items[i]) {
                index = i;
                break;
            }
        }
        return index;
    }

    orderItem(items: any[], from: number, to: number){
        let fromValue = items[from], toValue = items[to],i;
        if(from< to){
            for(i=from;i<to;i++){
                items[i] = items[i+1];
            }
            items[to] = fromValue;
        }else{
            for(i=from;i>to;i--){
                items[i] = items[i-1];
            }
            items[to] = fromValue;
        }
    }
}
