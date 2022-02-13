import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengersappComponent } from './passengersapp.component';

describe('PassengersappComponent', () => {
  let component: PassengersappComponent;
  let fixture: ComponentFixture<PassengersappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengersappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengersappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
