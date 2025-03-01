import { Component } from '@angular/core';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  carName:string=""
  cars:string[] = []

  addCar(){
    this.cars.push(this.carName)
    this.carName=""
    console.log(this.cars)
  }
}
