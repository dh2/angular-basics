import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Habit } from './habit';

@Injectable({
  providedIn: 'root'
})
export class HabitService {
  habits: Array<Habit> = [
    {
      id: 1,
      title: 'Take kids to school',
      count: 5
    },
    {
      id: 2,
      title: 'Write some code every day',
      count: 4
    },
    {
      id: 3,
      title: 'Meditate',
      count: 3
    },
    {
      id: 4,
      title: 'Consume literature',
      count: 2
    },
    {
      id: 5,
      title: 'Build/Create something',
      count: 6
    },
  ];

  getHabits(): Observable<Habit[]> {
    return this.http.get<Habit[]>('/api/habits');
  }

  addHabit(title: string) {
    const newHabit = {id: this.habits.length + 1, title, count: 1};
    this.habits.push(newHabit);
  }
  constructor(private http:HttpClient) { }
}
