import { Component, Input } from '@angular/core';

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
  @Input() habit!: Record<string, unknown>;
}
