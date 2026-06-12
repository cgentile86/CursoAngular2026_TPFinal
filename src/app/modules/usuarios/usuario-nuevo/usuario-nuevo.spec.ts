import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioNuevo } from './usuario-nuevo';

describe('UsuarioNuevo', () => {
  let component: UsuarioNuevo;
  let fixture: ComponentFixture<UsuarioNuevo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioNuevo],
    }).compileComponents();

    fixture = TestBed.createComponent(UsuarioNuevo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
