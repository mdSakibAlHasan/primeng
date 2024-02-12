import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Level2Component } from '../level-2/level-2.component';

@Component({
  selector: 'app-level-1',
  standalone: true,
  imports: [ReactiveFormsModule, Level2Component],
  templateUrl: './level-1.component.html',
  styleUrl: './level-1.component.css'
})
export class Level1Component {
  @Input({required: true}) simpleForm: any



}
