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
