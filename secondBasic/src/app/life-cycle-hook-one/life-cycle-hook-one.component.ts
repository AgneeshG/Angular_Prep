import { Component } from '@angular/core';
import { LifeCycleHooktwoComponent } from '../life-cycle-hooktwo/life-cycle-hooktwo.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-life-cycle-hook-one',
  standalone: true,
  imports: [LifeCycleHooktwoComponent, FormsModule],
  templateUrl: './life-cycle-hook-one.component.html',
  styleUrl: './life-cycle-hook-one.component.css'
})
export class LifeCycleHookOneComponent {
  textValue:string=''
}
