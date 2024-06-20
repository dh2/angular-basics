import { Injectable } from '@angular/core';
import { Account } from './account';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Habit } from './habit';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  constructor(private http:HttpClient) { }
  
  getInfo(id: string | number): Observable<Account> {
    return this.http.get<Account>(`/api/account/${id}`);
  }
  
  getHabits(id: string | number): Observable<Habit[]> {
    return this.http.get<Habit[]>(`/api/account/${id}/habits`);
  }
}
