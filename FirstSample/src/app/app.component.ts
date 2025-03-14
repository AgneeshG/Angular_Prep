import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstBasicComponent } from './first-basic/first-basic.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FirstBasicComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FirstSample';
}
