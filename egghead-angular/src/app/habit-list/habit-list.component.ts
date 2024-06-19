import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HabitItemComponent } from '../habit-item/habit-item.component';

interface HabitForm {
  title?: string | null;
}

@Component({
  selector: 'app-habit-list',
  standalone: true,
  imports: [HabitItemComponent, ReactiveFormsModule],
  template: `
   <h2>Habits</h2>
   <form [formGroup]="habitForm" (ngSubmit)="onSubmit(habitForm.value)">
      <input type="text" placeholder="Add Habit" name="addField" formControlName="title" />
      <button type="submit">Add</button>
   </form>
   <ul>
      @for (habit of habits; track habit.id) {
         <app-habit-item [habit]="habit"></app-habit-item>
}
   </ul> 
  `,
  styles: []
})
export class HabitListComponent implements OnInit {
  habitForm;
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

  constructor(private formBuilder: FormBuilder) {
    this.habitForm = this.formBuilder.group({
      title: '',
    })
  }

  onSubmit(formValues: HabitForm) {
    if (formValues.title) {
      const newHabit = {id: this.habits.length + 1, title: formValues.title};
      this.habits.push(newHabit);
      this.habitForm.reset();
    }
  }

  ngOnInit(): void {} 
}
