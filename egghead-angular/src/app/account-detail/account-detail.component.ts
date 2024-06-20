import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-detail',
  standalone: true,
  imports: [],
  template: `
    <p>
      Account #{{this.id}} works!
    </p>
  `,
  styles: ``
})
export class AccountDetailComponent implements OnInit{
  id!: string;
  constructor(private route:ActivatedRoute) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') ?? '';
  }

}
