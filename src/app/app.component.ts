import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Level1Component } from './level-1/level-1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule, Level1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'Reactive form';

  simpleForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl()
  })

  submit(){
    console.log("Form value: ",this.simpleForm.value);
  }

}
