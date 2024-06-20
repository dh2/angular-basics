import { Observable, Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { HabitItemComponent } from '../habit-item/habit-item.component';
import { HabitFormComponent } from '../habit-form/habit-form.component';
import { HabitService } from '../habit.service';
import { Habit } from '../habit';

@Component({
  selector: 'app-habit-list',
  standalone: true,
  imports: [HabitItemComponent, HabitFormComponent, AsyncPipe],
  templateUrl: 'habit-list.component.html',
  styles: []
})


export class HabitListComponent implements OnInit, OnDestroy {
  habits: Observable<Habit[]> | undefined;
  showForm = true;
  private habitSubs: Subscription[] = [];

  constructor(private habitService: HabitService) {}
  
  onAddHabit(newHabit: Habit) {
      this.habitService.addHabit(newHabit);
  }
  
  ngOnInit(): void {
    this.habits = this.habitService.refetch.pipe(
      switchMap(() => this.habitService.getHabits())
    );
  } 

  ngOnDestroy(): void {
    this.habitSubs.forEach(sub => sub.unsubscribe());
  }
}
