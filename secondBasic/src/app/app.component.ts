import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './inputOutput/form/form.component';
import { ListComponent } from './inputOutput/list/list.component';
import { LifeCycleHookOneComponent } from './life-cycle-hook-one/life-cycle-hook-one.component'
import { LifeCycleHooktwoComponent } from './life-cycle-hooktwo/life-cycle-hooktwo.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent, ListComponent, LifeCycleHookOneComponent, LifeCycleHooktwoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'secondBasic';
}
