import { Component } from '@angular/core';

@Component({
  selector: 'app-habits',
  standalone: true,
  imports: [],
  template: `
  <app-habit-list></app-habit-list>
  `,
  styles: ['h2 { color: blue }']
})
export class HabitsComponent {
}
