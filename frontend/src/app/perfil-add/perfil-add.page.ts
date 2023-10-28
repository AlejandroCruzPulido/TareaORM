import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PerfilService } from '../services/perfil.service';

@Component({
  selector: 'app-perfil-add',
  templateUrl: './perfil-add.page.html',
  styleUrls: ['./perfil-add.page.scss'],
})
export class PerfilAddPage implements OnInit {

  tipo: string = '';
  usuario: number = 1;

  constructor(private perfilService: PerfilService, private router: Router) { }

  ngOnInit() {
  }

  addPerfil() {
    let perfil = {
      tipo: this.tipo,
      usuario: this.usuario
    }
    this.perfilService.add(perfil).subscribe(response => {
      console.log("Perfil añadido");
      this.tipo = '';
      this.usuario = 1;
    });
  }

  gotoPerfilList(){
    this.router.navigateByUrl("/perfil-list")
  }
}