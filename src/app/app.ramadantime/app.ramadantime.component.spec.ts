import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRamadantimeComponent } from './app.ramadantime.component';

describe('AppRamadantimeComponent', () => {
  let component: AppRamadantimeComponent;
  let fixture: ComponentFixture<AppRamadantimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppRamadantimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppRamadantimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
