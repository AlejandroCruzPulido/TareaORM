import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

const endpoint = 'http://localhost:8080/direcciones';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DireccionService {
    private direccionUpdatedSource = new Subject<void>();
    
    direccionUpdated$ = this.direccionUpdatedSource.asObservable();  
  constructor(private httpClient: HttpClient) { }

  getDirecciones() {
    return this.httpClient.get(endpoint);
  }

  private direccionAddedSource = new Subject<void>();
  direccionAdded$ = this.direccionAddedSource.asObservable();

  add(direccion: any) {
    let body = new URLSearchParams();
    body.append("calle", direccion.calle);
    body.append("ciudad", direccion.ciudad);
    body.append("usuario", direccion.usuario.toString());

    return this.httpClient.post(endpoint, body.toString(), httpOptions).pipe(
      tap(() => {
        this.notifyListUpdated();
        this.direccionAddedSource.next(); 
      })
    );
  }

  updateDireccion(direccionId: number, updatedDireccion: any): Observable<any> {
    const updateUrl = `${endpoint}/${direccionId}`;
    let body = new URLSearchParams();
    body.append("calle", updatedDireccion.calle);
    body.append("ciudad", updatedDireccion.ciudad);
    body.append("usuario", updatedDireccion.usuario.toString());
  
    return this.httpClient.put(updateUrl, body.toString(), httpOptions).pipe(
      tap(() => {
        this.notifyListUpdated();
      })
    );
  }
  
  notifyListUpdated() {
    this.direccionUpdatedSource.next();
  }

  getDireccionById(direccionId: number): Observable<any> {
    const direccionUrl = `${endpoint}/${direccionId}`;
    return this.httpClient.get(direccionUrl);
  }

  deleteDireccion(direccionId: number): Observable<any> {
    const deleteUrl = `${endpoint}/${direccionId}`;
    return this.httpClient.delete(deleteUrl, httpOptions).pipe(
      tap(() => {
        this.notifyListUpdated();
      })
    );
  }  
}
