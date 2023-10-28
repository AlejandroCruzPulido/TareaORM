import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuarioUpdatePage } from './usuario-update.page';

describe('UsuarioUpdatePage', () => {
  let component: UsuarioUpdatePage;
  let fixture: ComponentFixture<UsuarioUpdatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UsuarioUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
