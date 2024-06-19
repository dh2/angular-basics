import { Component, Input } from '@angular/core';
import { Habit } from '../habit.service';

@Component({
  selector: 'app-habit-item',
  standalone: true,
  imports: [],
  template: `
    <li>{{ habit['title'] }}</li>
  `,
  styles: ``
})
export class HabitItemComponent {
  @Input() habit!: Habit;
}
