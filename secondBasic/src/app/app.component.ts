import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './inputOutput/form/form.component';
import { ListComponent } from './inputOutput/list/list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'secondBasic';
}
