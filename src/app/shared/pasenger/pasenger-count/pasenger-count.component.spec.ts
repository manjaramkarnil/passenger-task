import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasengerCountComponent } from './pasenger-count.component';

describe('PasengerCountComponent', () => {
  let component: PasengerCountComponent;
  let fixture: ComponentFixture<PasengerCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasengerCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasengerCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
