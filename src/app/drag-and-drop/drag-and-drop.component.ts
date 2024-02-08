import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DragDropModule } from 'primeng/dragdrop';
import { SplitterModule } from 'primeng/splitter';

@Component({
  selector: 'app-drag-and-drop',
  standalone: true,
  imports: [CommonModule,DragDropModule, SplitterModule ],
  templateUrl: './drag-and-drop.component.html',
  styleUrl: './drag-and-drop.component.css'
})
export class DragAndDropComponent implements OnInit{
  availableProducts: any[] | undefined;

    selectedProducts: any[] | undefined;

    draggedProduct: any | undefined | null;

    ngOnInit() {
        this.selectedProducts = [];
        this.availableProducts = [
            {id:'1', name: 'Black Watch'},
            {id:'2', name: 'Bamboo Watch'}
        ]
    }

    dragStart(product: any) {
        this.draggedProduct = product;
    }

    drop() {
        if (this.draggedProduct) {
            let draggedProductIndex = this.findIndex(this.draggedProduct);
            this.selectedProducts = [...(this.selectedProducts as any[]), this.draggedProduct];
            this.availableProducts = this.availableProducts?.filter((val, i) => i != draggedProductIndex);
            this.draggedProduct = null;
        }
    }

    dragEnd() {
        this.draggedProduct = null;
    }

    findIndex(product: any) {
        let index = -1;
        for (let i = 0; i < (this.availableProducts as any[]).length; i++) {
            if (product.id === (this.availableProducts as any[])[i].id) {
                index = i;
                break;
            }
        }
        return index;
    }
}
