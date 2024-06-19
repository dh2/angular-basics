import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HabitListComponent } from './habit-list/habit-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HabitListComponent],
  // templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
  template: `
  <div class="container">
    <h1>{{title}}</h1>
    <app-habit-list></app-habit-list>
  </div>
  `,
  styles: ['h1 { color: blue }']
})
export class AppComponent {
  title = 'DH2:  Habit Tracker';
}
