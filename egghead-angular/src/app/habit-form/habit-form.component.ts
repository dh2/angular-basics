import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

interface HabitForm {
  title?: string | null;
}
@Component({
  selector: 'app-habit-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="habitForm" (ngSubmit)="onSubmit(habitForm.value)">
      <input type="text" placeholder="Add Habit" name="addField" formControlName="title" />
      <button type="submit">Add</button>
   </form>
  `,
  styles: ``
})
export class HabitFormComponent  implements OnInit {
  habitForm;
  @Output() addHabit = new EventEmitter<any>();
  constructor(private formBuilder: FormBuilder) {
    this.habitForm = this.formBuilder.group({
      title: '',
    })
  }

  onSubmit(formValues: HabitForm) {
    if (formValues.title) {
      this.addHabit.emit(formValues.title);
      this.habitForm.reset();
    }
  }

  ngOnInit(): void {}
}
