import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasengercardComponent } from './pasengercard.component';

describe('PasengercardComponent', () => {
  let component: PasengercardComponent;
  let fixture: ComponentFixture<PasengercardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasengercardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasengercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
