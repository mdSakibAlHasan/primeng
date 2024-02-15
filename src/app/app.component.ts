import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DragComponent } from './drag/drag.component';
import { DynamicHooksModule, HookParserEntry, DynamicHooksInheritance } from 'ngx-dynamic-hooks';
import { DynamicComponent } from './dynamic/dynamic.component';
import { ParserEntryResolver } from 'ngx-dynamic-hooks/lib/components/outlet/options/parserEntryResolver';


export const componentParsers: Array<HookParserEntry> = [
  {component: DragComponent},
  {component: DynamicComponent}
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DynamicHooksModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'Drag and drop';
  dataPass = {
    text : this.title,
    func: this.collectFromChild.bind(this)
  }

  collectFromChild(text: string){
    this.title = text
  }
  
 
  componentName = 'Here are the dynamic component <app-dynamic [textName]="context.text" (sendText)="context.func($event)" ></app-dynamic> <h1>look asm</h1>'
}
