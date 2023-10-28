import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PerfilService } from '../services/perfil.service';

@Component({
  selector: 'app-perfil-update',
  templateUrl: './perfil-update.page.html',
  styleUrls: ['./perfil-update.page.scss'],
})
export class PerfilUpdatePage implements OnInit {

  perfilId: number = 0;
  perfil: any = {}; 

  constructor(private perfilService: PerfilService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.perfilId = +this.activatedRoute.snapshot.paramMap.get('id')!;
  
    this.perfilService.getPerfilById(this.perfilId).subscribe((data) => {
      this.perfil = data;
    });
  }  

  updatePerfil(){
      this.perfilService.updatePerfil(this.perfilId, this.perfil).subscribe(() => {
      console.log('Cambios guardados');
      this.router.navigateByUrl('/perfil-list');
  });
}
}
