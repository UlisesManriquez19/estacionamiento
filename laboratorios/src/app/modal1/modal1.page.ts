import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-modal1',
  templateUrl: './modal1.page.html',
  styleUrls: ['./modal1.page.scss'],
})
export class Modal1Page implements OnInit {

  constructor(public modalController: ModalController, public alertController: AlertController) { }

  ngOnInit() {
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  async presentAlert4() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Docente en clase',
      subHeader: 'No interumpir',
      message: 'Clase en proceso, !!comenzando!!.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  async presentAlert5() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Docente en clase',
      subHeader: 'No interumpir',
      message: 'Clase en proceso, !!Apunto de acabar!!.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  async presentAlert6() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Docente en clases',
      subHeader: 'No interrumpir',
      message: 'Clase en proceso, !!Acabando!!.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
