import { Component, Input } from '@angular/core';
import { Habit } from '../habit';

@Component({
  selector: 'app-habit-item',
  standalone: true,
  imports: [],
  template: `
    <li [style.color]="habit.streak ? 'red' : 'black'">{{ habit['title'] }} (Count: {{habit.count}}) <button type="button">Delete</button></li>
  `,
  styles: ``
})
export class HabitItemComponent {
  @Input() habit!: Habit;
}
