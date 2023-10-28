import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DireccionService } from '../services/direccion.service';

@Component({
  selector: 'app-direccion-add',
  templateUrl: './direccion-add.page.html',
  styleUrls: ['./direccion-add.page.scss'],
})
export class DireccionAddPage implements OnInit {

  calle: string = '';
  ciudad: string = '';
  usuario: number = 1;

  constructor(private direccionService: DireccionService, private router: Router) { }

  ngOnInit() {
  }

  addDireccion() {
    let direccion = {
      calle: this.calle,
      ciudad: this.ciudad,
      usuario: this.usuario
    }
    this.direccionService.add(direccion).subscribe(response => {
      console.log("Dirección añadida");
      this.calle = '';
      this.ciudad = '';
      this.usuario = 1;
    });
  }

  gotoDireccionList(){
    this.router.navigateByUrl("/direccion-list")
  }
}