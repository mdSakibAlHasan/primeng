import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CombineComponentComponent } from './combine-component/combine-component.component';
import { DropdownTestComponent } from './dropdown-test/dropdown-test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,CombineComponentComponent, DropdownTestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'treeGenerate';
}
