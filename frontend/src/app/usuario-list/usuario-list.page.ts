import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.page.html',
  styleUrls: ['./usuario-list.page.scss'],
})
export class UsuarioListPage implements OnInit, OnDestroy {
  usuarios: any = [];
  private refreshSubscription!: Subscription;
  searchParams: any = {};
  filteredUsuarios: any = [];

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit() {
    this.loadUsuarios();
    this.usuarioService.usuarioUpdated$.subscribe(() => {
      this.loadUsuarios();
    });
  }

  ngOnDestroy() {
    if (this.refreshSubscription) {
      this.refreshSubscription.unsubscribe();
    }
  }

  loadUsuarios() {
    this.usuarioService.getUsuarios().subscribe((data) => {
      this.usuarios = data;
      this.filteredUsuarios = data;
    });
  }

  gotoUsuarioAdd() {
    this.router.navigateByUrl('/usuario-add');
  }

  gotoHome() {
    this.router.navigateByUrl('/home');
  }

  editUsuario(usuarioId: number) {
    this.router.navigate(['/usuario-update', usuarioId]);
  }

  deleteUsuario(usuarioId: number) {
    this.usuarioService.deleteUsuario(usuarioId).subscribe(() => {
      console.log('Usuario eliminado');
      this.loadUsuarios();
    });
  }
}
