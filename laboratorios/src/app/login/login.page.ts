import { Component, OnInit } from '@angular/core';
import {DataService} from '../data/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  mensaje: any[] = [];
  Correo:any;
  Contrasena:any;

  constructor(private DataService: DataService) { }

  ngOnInit() {
  }

  login(): void {
    this.DataService.postLogear(this.Correo, this.Contrasena).subscribe((Logear: any = [3]) => {
      console.log(Logear);
      this.mensaje = Logear.Valor;
      console.log(this.mensaje);
      if (Logear.estatus) {
        document.location.href = '/inicio';
      } else {

      }

    });

  }

}
