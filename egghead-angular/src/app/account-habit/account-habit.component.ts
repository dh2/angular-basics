import { Component, OnInit } from '@angular/core';
import { Habit } from '../habit';
import { AsyncPipe } from '@angular/common';
import { HabitFormComponent } from '../habit-form/habit-form.component';
import { HabitItemComponent } from '../habit-item/habit-item.component';
import { AccountService } from '../account.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-account-habit',
  standalone: true,
  imports: [HabitItemComponent, HabitFormComponent, AsyncPipe],
  templateUrl: '../habit-list/habit-list.component.html',
  styles: ``
})
export class AccountHabitComponent implements OnInit {
  showForm = false;
  habits: Observable<Habit[]> | undefined;
  private id: string | number = 1;

  constructor(private accountService: AccountService, private route:ActivatedRoute) {}

  ngOnInit(): void {
    if (this.route.parent) {
      this.route.parent.paramMap.subscribe((params: ParamMap) => {
          this.id = params.get('id') ?? 1;
        })
      } else {
        this.habits = of([]);
      }
      this.habits =  this.accountService.getHabits(this.id);
  }

  onAddHabit = () => {};
}
