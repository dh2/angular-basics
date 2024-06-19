import { Component } from '@angular/core';

@Component({
  selector: 'app-habits',
  standalone: true,
  imports: [],
  template: `
  <div class="container">
    <h1>{{title}}</h1>
    <app-habit-list></app-habit-list>
  </div>
  `,
  styles: ['h1 { color: blue }']
})
export class HabitsComponent {

}
