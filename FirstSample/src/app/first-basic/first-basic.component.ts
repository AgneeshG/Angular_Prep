import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first-basic',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './first-basic.component.html',
  styleUrl: './first-basic.component.css'
})
export class FirstBasicComponent {
  sampleText:string = 'Have a nice day'
  calculate:number = 0;
  num:number=0;
  value:string="angular"
  showMe:boolean = true;
  status:string = "no error";
  color:string = 'purple';
  Student:{name:string,age:number,mark:number} = {
    name:'Krishna',
    age:25,
    mark:452
  }

  movies:string[] = ['SpiderMan', 'SuperMan', 'Thor', 'The Flash']
  constructor(){}

  addition(){
    this.calculate++;
  }
  subtraction(){
    this.calculate--;
    if(this.calculate<0){
      this.calculate=0;
    }
  }
}
