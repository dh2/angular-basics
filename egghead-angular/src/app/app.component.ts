import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  // templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
  template: `<h1>{{title}}</h1>`,
  styles: ['h1 { color: blue }']
})
export class AppComponent {
  title = 'DH2:  Angular With Egghead';
}
