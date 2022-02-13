import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortadaappComponent } from './portadaapp.component';

describe('PortadaappComponent', () => {
  let component: PortadaappComponent;
  let fixture: ComponentFixture<PortadaappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortadaappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortadaappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
