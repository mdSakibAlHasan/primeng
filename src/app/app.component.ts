import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DragComponent } from './drag/drag.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DragComponent, DragAndDropComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'Drag and drop';
}
