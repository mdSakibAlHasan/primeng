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

    selectedCars: any[] = [];
    
    draggedCar: any;

    draggedCar2: any;
    
    constructor() { }
    
    ngOnInit() {
       
        this.selectedCars = [
        {"brand": "1", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
        {"brand": "2", "year": 2011, "color": "Black", "vin": "gwregre345"},
        {"brand": "3", "year": 2005, "color": "Gray", "vin": "h354htr"},
        {"brand": "4", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
        {"brand": "5", "year": 1995, "color": "Orange", "vin": "hrtwy34"},
        {"brand": "6", "year": 2005, "color": "Black", "vin": "jejtyj"},
        {"brand": "7", "year": 2012, "color": "Yellow", "vin": "g43gr"},
        {"brand": "8", "year": 2013, "color": "Orange", "vin": "greg34"},
        {"brand": "9", "year": 2000, "color": "Black", "vin": "h54hw5"},
        {"brand": "10", "year": 2013, "color": "Red", "vin": "245t2s"}
    ];
    }
    
    dragStart(car: any) {
        this.draggedCar = car;
    }

    dragStart2(car: any) {
        this.draggedCar2 = car;
    }
    
    drop(event: any,dropIndex?: any, position?: any) {
        if(this.draggedCar) {
            let draggedCarIndex = this.findIndexFromAvailableCars(this.draggedCar);
            this.selectedCars = [...this.selectedCars, this.draggedCar];
            // this.availableCars = this.availableCars.filter((val,i) => i!=draggedCarIndex);
            this.draggedCar = null;
        }
        else if (this.draggedCar2) {
            let index = this.findIndexFromSelectedCars(this.draggedCar2);
            this.reorderArray(this.selectedCars, index, dropIndex);
            this.draggedCar2 = null;
        }
        
        event.target.classList.remove("example-active");
    }
    
    dragEnter(event: any) {
        event.target.classList.add("example-active");
    }

    dragLeave(event: any) {
        event.target.classList.remove("example-active")
    }

    dragEnd(event: any) {
        console.log("drag end")
        this.draggedCar = null;
    }
    
    findIndexFromAvailableCars(car: any) {
        let index = -1;
        // for(let i = 0; i < this.availableCars.length; i++) {
        //     if(car.vin === this.availableCars[i].vin) {
        //         index = i;
        //         break;
        //     }
        // }
        return index;
    }

    findIndexFromSelectedCars(car: any) {
        let index = -1;
        for(let i = 0; i < this.selectedCars.length; i++) {
            if(car.vin === this.selectedCars[i].vin) {
                index = i;
                break;
            }
        }
        return index;
    }

    reorderArray(value: any[], from: number, to: number) {
        let target: number;
        if(value && (from !== to)) {
            if(to >= value.length) {
                target = to - value.length;
                while((target--) + 1) {
                    value.push(undefined);
                }
            }
            value.splice(to, 0, value.splice(from, 1)[0]);
        }
    }
}
