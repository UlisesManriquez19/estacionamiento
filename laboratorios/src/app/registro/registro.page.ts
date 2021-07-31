import { Component, OnInit } from '@angular/core';
import {DataService} from '../data/data.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  mensaje: any[] = [];
  Correo:any;
  Nombre:any;
  Contrasena:any;
  Matricula:any;
  Modelo:any;
  Placas:any;
  Anio:any;
  Color:any;
  constructor(private DataService: DataService) { }

  ngOnInit() {
  }

  registro(): void{
    this.DataService.postRegistro(this.Correo, this.Nombre, this.Contrasena, this.Matricula, this.Modelo, this.Placas, this.Anio, this.Color).subscribe((Registro: any = [8]) => {
      console.log(Registro);
      this.mensaje = Registro.Valor;
      console.log(this.mensaje);
      if (Registro.estatus) {
        document.location.href = '/inicio';
      } else {

      }
    });
  }

}
