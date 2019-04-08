import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReservasPage } from '../reservas/reservas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}
  goBusca() {
    this.navCtrl.setRoot(ReservasPage);
  }
}
