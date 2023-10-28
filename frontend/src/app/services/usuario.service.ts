import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

const endpoint = 'http://localhost:8080/usuarios';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
    private usuarioUpdatedSource = new Subject<void>();
    
    usuarioUpdated$ = this.usuarioUpdatedSource.asObservable();  
  constructor(private httpClient: HttpClient) { }

  getUsuarios() {
    return this.httpClient.get(endpoint);
  }

  private usuarioAddedSource = new Subject<void>();
  usuarioAdded$ = this.usuarioAddedSource.asObservable();

  add(usuario: any) {
    let body = new URLSearchParams();
    body.append("nombre", usuario.nombre);
    body.append("email", usuario.email);

    return this.httpClient.post(endpoint, body.toString(), httpOptions).pipe(
      tap(() => {
        this.notifyListUpdated();
        this.usuarioAddedSource.next(); 
      })
    );
  }

  updateUsuario(usuarioId: number, updatedUsuario: any): Observable<any> {
    const updateUrl = `${endpoint}/${usuarioId}`;
    let body = new URLSearchParams();
    body.append("nombre", updatedUsuario.nombre);
    body.append("email", updatedUsuario.email);
  
    return this.httpClient.put(updateUrl, body.toString(), httpOptions).pipe(
      tap(() => {
        this.notifyListUpdated();
      })
    );
  }
  
  notifyListUpdated() {
    this.usuarioUpdatedSource.next();
  }

  getUsuarioById(usuarioId: number): Observable<any> {
    const carUrl = `${endpoint}/${usuarioId}`;
    return this.httpClient.get(carUrl);
  }

  deleteUsuario(usuarioId: number): Observable<any> {
    const deleteUrl = `${endpoint}/${usuarioId}`;
    return this.httpClient.delete(deleteUrl, httpOptions).pipe(
      tap(() => {
        this.notifyListUpdated();
      })
    );
  }  
}
