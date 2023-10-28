import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DireccionService } from '../services/direccion.service';

@Component({
  selector: 'app-direccion-update',
  templateUrl: './direccion-update.page.html',
  styleUrls: ['./direccion-update.page.scss'],
})
export class DireccionUpdatePage implements OnInit {

  direccionId: number = 0;
  direccion: any = {}; 

  constructor(private direccionService: DireccionService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.direccionId = +this.activatedRoute.snapshot.paramMap.get('id')!;
  
    this.direccionService.getDireccionById(this.direccionId).subscribe((data) => {
      this.direccion = data;
    });
  }  

  updateDireccion(){
      this.direccionService.updateDireccion(this.direccionId, this.direccion).subscribe(() => {
      console.log('Cambios guardados');
      this.router.navigateByUrl('/direccion-list');
  });
}
}
