import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashGamesComponent } from './cash-games.component';

describe('CashGamesComponent', () => {
  let component: CashGamesComponent;
  let fixture: ComponentFixture<CashGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
