import { Component, OnInit, OnDestroy } from '@angular/core';
import { PerfilService } from '../services/perfil.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-perfil-list',
  templateUrl: './perfil-list.page.html',
  styleUrls: ['./perfil-list.page.scss'],
})
export class PerfilListPage implements OnInit, OnDestroy {
  perfiles: any = [];
  private refreshSubscription!: Subscription;

  constructor(private perfilService: PerfilService, private router: Router) {}

  ngOnInit() {
    this.loadPerfiles();
    this.perfilService.perfilUpdated$.subscribe(() => {
      this.loadPerfiles();
    });
  }

  ngOnDestroy() {
    if (this.refreshSubscription) {
      this.refreshSubscription.unsubscribe();
    }
  }

  loadPerfiles() {
    this.perfilService.getPerfiles().subscribe((data) => {
      console.log(data);
      this.perfiles = data;
    });
  }

  gotoPerfilAdd() {
    this.router.navigateByUrl('/perfil-add');
  }

  gotoHome() {
    this.router.navigateByUrl('/home');
  }

  editPerfil(perfilId: number) {
    this.router.navigate(['/perfil-update', perfilId]);
  }

  deletePerfil(perfilId: number) {
    this.perfilService.deletePerfil(perfilId).subscribe(() => {
      console.log('Perfil eliminado');
      this.loadPerfiles();
    });
  }
}
