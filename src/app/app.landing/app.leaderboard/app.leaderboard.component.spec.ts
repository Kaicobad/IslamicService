import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLeaderboardComponent } from './app.leaderboard.component';

describe('AppLeaderboardComponent', () => {
  let component: AppLeaderboardComponent;
  let fixture: ComponentFixture<AppLeaderboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppLeaderboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
