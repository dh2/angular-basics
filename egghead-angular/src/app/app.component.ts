import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HabitListComponent } from './habit-list/habit-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HabitListComponent],
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {
   title = "DH Angular App";
}
