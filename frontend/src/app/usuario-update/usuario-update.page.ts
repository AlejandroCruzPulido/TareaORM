import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-usuario-update',
  templateUrl: './usuario-update.page.html',
  styleUrls: ['./usuario-update.page.scss'],
})
export class UsuarioUpdatePage implements OnInit {

  usuarioId: number = 0;
  usuario: any = {}; 

  constructor(private usuarioService: UsuarioService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.usuarioId = +this.activatedRoute.snapshot.paramMap.get('id')!;
  
    this.usuarioService.getUsuarioById(this.usuarioId).subscribe((data) => {
      this.usuario = data;
    });
  }  

  updateUsuario(){
      this.usuarioService.updateUsuario(this.usuarioId, this.usuario).subscribe(() => {
      console.log('Cambios guardados');
      this.router.navigateByUrl('/usuario-list');
  });
}
}
