import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DragComponent } from './drag/drag.component';
import { DynamicHooksModule, HookParserEntry, OutletService } from 'ngx-dynamic-hooks';
import { DynamicComponent } from './dynamic/dynamic.component';
import { ParserEntryResolver } from 'ngx-dynamic-hooks/lib/components/outlet/options/parserEntryResolver';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DynamicHooksModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'Drag and drop';
 
  componentName = "<app-drag></app-drag>"
}
