import { Component, Input, OnChanges,SimpleChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hooktwo',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle-hooktwo.component.html',
  styleUrl: './life-cycle-hooktwo.component.css'
})
export class LifeCycleHooktwoComponent implements OnChanges, OnInit{
  @Input() value:string='Hello'

  ngOnInit(){
    console.log("First statement ngOnInit")
    this.value = "Text message"
  }

  ngOnChanges(changes:SimpleChanges){
    console.log(changes)
  }
}
