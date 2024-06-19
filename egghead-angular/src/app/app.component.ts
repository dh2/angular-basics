import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HabitListComponent } from './habit-list/habit-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HabitListComponent],
  template: `<router-outlet></router-outlet>`,
  styles: []
})
export class AppComponent {
  title = 'DH2:  Habit Tracker';
}
