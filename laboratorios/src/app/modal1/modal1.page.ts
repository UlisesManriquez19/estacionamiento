import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import {DataService} from '../data/data.service';
@Component({
  selector: 'app-modal1',
  templateUrl: './modal1.page.html',
  styleUrls: ['./modal1.page.scss'],
})
export class Modal1Page implements OnInit {

  constructor(public modalController: ModalController, public alertController: AlertController,private DataService: DataService) { }
  mensajes: any;
  mensajes1:any;
  mensajes2:any;
  mensajes3:any;
  mensajes4:any;
  mensajes5:any;


  id_profesor:any=15;
  id_profesor1:any=16;
  id_profesor2:any=17;
  id_profesor3:any=18;
  id_profesor4:any=20;
  id_profesor5:any=21;

  ngOnInit() {
    this.Buscar();
    this.Buscar1();
    this.Buscar2();
    this.Buscar3();
    this.Buscar4();
    this.Buscar5();
  }

  Buscar(): void {
    this.DataService.postBuscar(this.id_profesor).subscribe((Buscar: any) => {
      console.log(Buscar);
      this.mensajes = Buscar;
      console.log(this.mensajes);
    });

  }
  Buscar1(): void {
    this.DataService.postBuscar(this.id_profesor1).subscribe((Buscar: any) => {
      console.log(Buscar);
      this.mensajes1 = Buscar;
      console.log(this.mensajes1);
    });

  }
  Buscar2(): void {
    this.DataService.postBuscar(this.id_profesor2).subscribe((Buscar: any) => {
      console.log(Buscar);
      this.mensajes2 = Buscar;
      console.log(this.mensajes2);
    });

  }
  Buscar3(): void {
    this.DataService.postBuscar(this.id_profesor3).subscribe((Buscar: any) => {
      console.log(Buscar);
      this.mensajes3 = Buscar;
      console.log(this.mensajes3);
    });

  }
  Buscar4(): void {
    this.DataService.postBuscar(this.id_profesor4).subscribe((Buscar: any) => {
      console.log(Buscar);
      this.mensajes4 = Buscar;
      console.log(this.mensajes4);
    });

  }
  Buscar5(): void {
    this.DataService.postBuscar(this.id_profesor5).subscribe((Buscar: any) => {
      console.log(Buscar);
      this.mensajes5 = Buscar;
      console.log(this.mensajes5);
    });

  }
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  async alertas() {
    if (this.id_profesor <=14) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'OCUPADO',
        subHeader: 'estacionamiento ocupado',
        message: 'no disponible',
        buttons: ['OK']
      });

      await alert.present();

      const {role} = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);


    }else if(this.id_profesor >=15){

      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'DESOCUPADO',
        subHeader: 'estacionamiento desocupado',
        message: 'disponible.',
        buttons: ['OK']
      });
      await alert.present();

      const {role} = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    }
  }
}
