import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-account-info',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <h2>{{info.name}}</h2>
    <p>{{info.age}}</p>
  `,
  styles: ``
})
export class AccountInfoComponent implements OnInit{
  info: Account = {name: 'Unknown', age: '-'};

  constructor(private account: AccountService, private route:ActivatedRoute) {}
  
  ngOnInit(): void {
    if (this.route.parent) {
      this.route.parent.paramMap.subscribe((params: ParamMap) => {
          const id = params.get('id') ?? 1;
          return this.account.getInfo(id).subscribe((data: Account) => {
            this.info = data;
          });
        })
    } else {
      this.info = {name: 'Unknown', age: '-'};
    }
  }

  
}
