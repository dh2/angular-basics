import { Component, OnInit, OnDestroy } from '@angular/core';
import { HabitItemComponent } from '../habit-item/habit-item.component';
import { HabitFormComponent } from '../habit-form/habit-form.component';
import { HabitService, Habit } from '../habit.service';
import { Subscription } from 'rxjs';

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


export class HabitListComponent implements OnInit, OnDestroy {
  habits: Habit[];
  private habitSubs: Subscription[] = [];

  constructor(private habitService: HabitService) {
    this.habits = [];
  }
  
  cbGetHabits = (habits: Habit[]) => {
    this.habits = habits;
  };
  
  onAddHabit(title: string) {
    if (title) {
      this.habitService.addHabit(title);
    }
  }
  
  ngOnInit(): void {
    this.habitSubs.push(this.habitService.getHabits().subscribe(this.cbGetHabits));
  } 

  ngOnDestroy(): void {
    this.habitSubs.forEach(sub => sub.unsubscribe());
  }
}
