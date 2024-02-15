import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  standalone: true,
  imports: [],
  templateUrl: './dynamic.component.html',
  styleUrl: './dynamic.component.css'
})
export class DynamicComponent {
  @Input() textName: string = ''
  @Output() sendText = new EventEmitter<string>()

  numberID =0
  send(){
    console.log("click")
    this.numberID++
    this.sendText.emit(this.numberID.toString());
  }
}
