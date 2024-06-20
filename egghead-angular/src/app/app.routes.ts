import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HabitListComponent } from './habit-list/habit-list.component';
import { AccountComponent } from './account/account.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'account', component: AccountComponent},
    { path: 'account/:id', component: AccountDetailComponent},
    { path: 'habits', component: HabitListComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'}
];
