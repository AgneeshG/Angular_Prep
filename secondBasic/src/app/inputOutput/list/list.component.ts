import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, FormsModule, FormComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  cars:string[] = ['tesla','ahdsa']

  getCarsData(event:string[]){
    this.cars = event
  }
}
