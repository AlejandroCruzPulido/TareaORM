import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DireccionUpdatePage } from './direccion-update.page';

describe('DireccionUpdatePage', () => {
  let component: DireccionUpdatePage;
  let fixture: ComponentFixture<DireccionUpdatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DireccionUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
