import { Component, OnInit, OnDestroy } from '@angular/core';
import { DireccionService } from '../services/direccion.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-direccion-list',
  templateUrl: './direccion-list.page.html',
  styleUrls: ['./direccion-list.page.scss'],
})
export class DireccionListPage implements OnInit, OnDestroy {
  direcciones: any = [];
  private refreshSubscription!: Subscription;

  constructor(private direccionService: DireccionService, private router: Router) {}

  ngOnInit() {
    this.loadDirecciones();
    this.direccionService.direccionUpdated$.subscribe(() => {
      this.loadDirecciones();
    });
  }

  ngOnDestroy() {
    if (this.refreshSubscription) {
      this.refreshSubscription.unsubscribe();
    }
  }

  loadDirecciones() {
    this.direccionService.getDirecciones().subscribe((data) => {
      console.log(data);
      this.direcciones = data;
    });
  }

  gotoDireccionAdd() {
    this.router.navigateByUrl('/direccion-add');
  }

  gotoHome() {
    this.router.navigateByUrl('/home');
  }

  editDireccion(direccionId: number) {
    this.router.navigate(['/direccion-update', direccionId]);
  }

  deleteDireccion(direccionId: number) {
    this.direccionService.deleteDireccion(direccionId).subscribe(() => {
      console.log('Direccion eliminado');
      this.loadDirecciones();
    });
  }
}
