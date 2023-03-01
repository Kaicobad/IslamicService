import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppIslamicqoutesComponent } from './app.islamicqoutes.component';

describe('AppIslamicqoutesComponent', () => {
  let component: AppIslamicqoutesComponent;
  let fixture: ComponentFixture<AppIslamicqoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppIslamicqoutesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppIslamicqoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
