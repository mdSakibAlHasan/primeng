import { Component, Input, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-level-2',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './level-2.component.html',
  styleUrl: './level-2.component.css'
})
export class Level2Component {
  @Input({required: true}) simpleForm: any
}
