import { Component, OnInit } from '@angular/core';
import { HabitItemComponent } from '../habit-item/habit-item.component';
import { HabitFormComponent } from '../habit-form/habit-form.component';

interface HabitForm {
  title?: string | null;
}

@Component({
  selector: 'app-habit-list',
  standalone: true,
  imports: [HabitItemComponent, HabitFormComponent],
  template: `
   <h2>Habits</h2>
   <app-habit-form (addHabit)="onAddHabit($event)"></app-habit-form>
   <ul>
      @for (habit of habits; track habit.id) {
         <app-habit-item [habit]="habit"></app-habit-item>
}
   </ul> 
  `,
  styles: []
})
export class HabitListComponent implements OnInit {
  habits = [
    {
      id: 1,
      title: 'Take kids to school'
    },
    {
      id: 2,
      title: 'Write some code every day'
    },
    {
      id: 3,
      title: 'Meditate'
    },
    {
      id: 4,
      title: 'Consume literature'
    },
    {
      id: 5,
      title: 'Build/Create something'
    },
  ];

  constructor() {}

  onAddHabit(title: string) {
    if (title) {
      const newHabit = {id: this.habits.length + 1, title};
      this.habits.push(newHabit);
    }
  }

  ngOnInit(): void {} 
}
