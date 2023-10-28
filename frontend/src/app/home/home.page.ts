import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  gotoUsuariosList(){
    this.router.navigateByUrl("/usuario-list")
  }

  gotoPerfilesList(){
    this.router.navigateByUrl("/perfil-list")
  }

  gotoDireccionesList(){
    this.router.navigateByUrl("/direccion-list")
  }

}
