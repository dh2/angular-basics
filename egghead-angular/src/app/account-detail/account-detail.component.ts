import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, RouterLink } from '@angular/router';

@Component({
  selector: 'app-account-detail',
  standalone: true,
  imports: [RouterLink],
  template: `
    <p>
      Account #{{this.id}} works!
    </p>
    <ul>
    <li><a [routerLink]="['/account', 1]">One</a></li>
    <li><a [routerLink]="['/account', 2]">Two</a></li>
    <li><a [routerLink]="['/account', 3]">Three</a></li>
</ul>
  `,
  styles: ``
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
