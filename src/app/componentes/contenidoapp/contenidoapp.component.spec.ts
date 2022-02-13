import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoappComponent } from './contenidoapp.component';

describe('ContenidoappComponent', () => {
  let component: ContenidoappComponent;
  let fixture: ComponentFixture<ContenidoappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
