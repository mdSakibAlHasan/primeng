import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CombineComponentComponent } from './combine-component/combine-component.component';
import { DropdownTestComponent } from './dropdown-test/dropdown-test.component';
import { TableEditingComponent } from './table-editing/table-editing.component';
import { TableSortComponent } from './table-sort/table-sort.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,CombineComponentComponent, DropdownTestComponent, TableEditingComponent, TableSortComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'treeGenerate';
}
