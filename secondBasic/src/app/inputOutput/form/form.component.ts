import { Component, Output,EventEmitter } from '@angular/core';
import { ListComponent } from '../list/list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  carName:string=""
  cars:string[] = []
  @Output() carAdded:EventEmitter<string[]> = new EventEmitter;



  addCar(){
    this.cars.push(this.carName)
    this.carName=""
    console.log(this.cars)
    this.carAdded.emit(this.cars)
  }


}
