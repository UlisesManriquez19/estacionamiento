import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  postRegistro(Correo:any,Nombre:any,Contrasena:any,Matricula:any,Modelo:any,Placas:any,Anio:any,Color:any): Observable<any>{
    let  headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this.http.post<any>('https://apiprofesor.herokuapp.com/index.php?action=registrar&controller=Usuario',"Correo="+Correo+"&Nombre="+Nombre+"&Contraseña="+Contrasena+"&Matricula="+Matricula+"&Modelo="+Modelo+"&Placas="+Placas+"&Anio="+Anio+"&Color="+Color,{headers: headers});
  }

  postLogear(Correo: any,Contrasena: any): Observable<any> {
    let  headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this.http.post<any>('https://apiprofesor.herokuapp.com/index.php?action=Login&controller=Usuario',"Correo="+Correo+"&Contraseña="+Contrasena,{headers: headers});
  }

  postBuscar(id_profesor:any): Observable<any>{
    let  headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    return this.http.post<any>('https://apiprofesor.herokuapp.com/index.php?action=consultar&controller=Usuario',"id="+id_profesor,{headers: headers});
  }
}
