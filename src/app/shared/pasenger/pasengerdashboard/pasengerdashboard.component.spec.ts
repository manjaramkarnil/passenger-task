import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasengerdashboardComponent } from './pasengerdashboard.component';

describe('PasengerdashboardComponent', () => {
  let component: PasengerdashboardComponent;
  let fixture: ComponentFixture<PasengerdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasengerdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasengerdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
