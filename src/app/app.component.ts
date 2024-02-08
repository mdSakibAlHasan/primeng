import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DragComponent } from './drag/drag.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DragComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'Drag and drop';
}
