import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilUpdatePage } from './perfil-update.page';

describe('PerfilUpdatePage', () => {
  let component: PerfilUpdatePage;
  let fixture: ComponentFixture<PerfilUpdatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfilUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
