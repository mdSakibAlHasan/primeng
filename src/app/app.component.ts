import { Component, OnInit, SimpleChanges, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child1Component } from './child-1/child-1.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Child1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'Drag and drop';
  data = signal('First')
}
