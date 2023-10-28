import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-usuario-add',
  templateUrl: './usuario-add.page.html',
  styleUrls: ['./usuario-add.page.scss'],
})
export class UsuarioAddPage implements OnInit {

  nombre: string = '';
  email: string = '';

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
  }

  addUsuario(){
    let usuario = {
      nombre: this.nombre,
      email: this.email,
    }
    this.usuarioService.add(usuario).subscribe(response =>{
      console.log("Usuario añadido");
      this.nombre = '';
      this.email = '';
    })
  }

  gotoUsuarioList(){
    this.router.navigateByUrl("/usuario-list")
  }
}