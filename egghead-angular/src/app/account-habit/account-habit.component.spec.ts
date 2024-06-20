import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountHabitComponent } from './account-habit.component';

describe('AccountHabitComponent', () => {
  let component: AccountHabitComponent;
  let fixture: ComponentFixture<AccountHabitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountHabitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountHabitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
