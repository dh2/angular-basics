import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HabitListComponent } from './habit-list/habit-list.component';
import { AccountComponent } from './account/account.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { AccountHabitComponent } from './account-habit/account-habit.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'account', component: AccountComponent},
    { path: 'habits', component: HabitListComponent},
    { 
        path: 'account/:id', 
        component: AccountDetailComponent,
        children: [
            { path: 'habits', component: AccountHabitComponent},
            { path: 'info', component: AccountInfoComponent}
        ]
    },
    { path: '', redirectTo: '/home', pathMatch: 'full'}
];
