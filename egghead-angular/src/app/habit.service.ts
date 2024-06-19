import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

export interface Habit {
  id: number;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class HabitService {
  habits: Array<Habit> = [
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

  getHabits(): Observable<Habit[]> {
    return of (this.habits);
  }

  addHabit(title: string) {
    const newHabit = {id: this.habits.length + 1, title};
    this.habits.push(newHabit);
  }
  constructor() { }
}
