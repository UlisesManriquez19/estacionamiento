import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import {Modal1Page} from '../modal1/modal1.page';
import {Modal2Page} from '../modal2/modal2.page';
import {Modal3Page} from '../modal3/modal3.page';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'modal.page'
    });
    return await modal.present();
  }

  async presentModal1() {
    const modal = await this.modalController.create({
      component: Modal1Page,
      cssClass: 'modal1.page'
    });
    return await modal.present();
  }

  async presentModal2() {
    const modal = await this.modalController.create({
      component: Modal2Page,
      cssClass: 'modal2.page'
    });
    return await modal.present();
  }

  async presentModal3() {
    const modal = await this.modalController.create({
      component: Modal3Page,
      cssClass: 'modal3.page'
    });
    return await modal.present();
  }
}
