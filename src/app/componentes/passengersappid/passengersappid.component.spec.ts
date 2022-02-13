import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengersappidComponent } from './passengersappid.component';

describe('PassengersappidComponent', () => {
  let component: PassengersappidComponent;
  let fixture: ComponentFixture<PassengersappidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengersappidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengersappidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
