import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

const endpoint = 'http://localhost:8080/perfiles';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
    private perfilUpdatedSource = new Subject<void>();
    
    perfilUpdated$ = this.perfilUpdatedSource.asObservable();  
  constructor(private httpClient: HttpClient) { }

  getPerfiles() {
    return this.httpClient.get(endpoint);
  }

  private perfilAddedSource = new Subject<void>();
  perfilAdded$ = this.perfilAddedSource.asObservable();

  add(perfil: any) {
    let body = new URLSearchParams();
    body.append("tipo", perfil.tipo);
    body.append("usuario", perfil.usuario.toString());

    return this.httpClient.post(endpoint, body.toString(), httpOptions).pipe(
      tap(() => {
        this.notifyListUpdated();
        this.perfilAddedSource.next(); 
      })
    );
  }

  updatePerfil(perfilId: number, updatedPerfil: any): Observable<any> {
    const updateUrl = `${endpoint}/${perfilId}`;
    let body = new URLSearchParams();
    body.append("tipo", updatedPerfil.tipo);
    body.append("usuario", updatedPerfil.usuario.toString());
  
    return this.httpClient.put(updateUrl, body.toString(), httpOptions).pipe(
      tap(() => {
        this.notifyListUpdated();
      })
    );
  }
  
  notifyListUpdated() {
    this.perfilUpdatedSource.next();
  }

  getPerfilById(perfilId: number): Observable<any> {
    const perfilUrl = `${endpoint}/${perfilId}`;
    return this.httpClient.get(perfilUrl);
  }

  deletePerfil(perfilId: number): Observable<any> {
    const deleteUrl = `${endpoint}/${perfilId}`;
    return this.httpClient.delete(deleteUrl, httpOptions).pipe(
      tap(() => {
        this.notifyListUpdated();
      })
    );
  }  
}
