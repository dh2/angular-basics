import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-detail',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  template: `
    <ul>
        <li><a class="nav-link" [routerLink]="['/account', 1]">One</a></li>
        <li><a class="nav-link" [routerLink]="['/account', 2]">Two</a></li>
        <li><a class="nav-link" [routerLink]="['/account', 3]">Three</a></li>
    </ul>
    <ul>
        <li><a routerLink="info" routerLinkActive="active">Info</a></li>
        <li><a routerLink="habits" routerLinkActive="active">Habits</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: `
  ul {
  list-style-type: none;
  font-size: 18px;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

ul :not(:last-child) {
  margin-right: 3px;
}

li {
  float: left;
}

.nav-link {
  display: block;
  text-align: center;
  padding: 7px;
  font-size: 16px;
  text-decoration: none;
  color: black;
  background-color: lightgreen;
}

.nav-link:hover {
  background-color: saddlebrown;
  color: white;
  transition: 0.2s ease-in-out;
}

.active {
  background-color: saddlebrown;
  color: white;
}
  `
})

export class AccountDetailComponent implements OnInit{
  id!: string;

  constructor(private route:ActivatedRoute) {}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id') ?? '';
    });
  }

}
