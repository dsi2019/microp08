import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VueloService } from '../../services/vuelo.service';
import { Vuelo } from '../../models/vuelo.model';

@IonicPage()
@Component({
  selector: 'page-checkin',
  templateUrl: 'checkin.html',
})
export class CheckinPage {
  currentVuelo: Vuelo;

  constructor(public navCtrl: NavController, public navParams: NavParams, private vueloService: VueloService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckinPage');
  }

  onSubmitCheckIn(value: {nombre:string, pasaporte:string, telefono:number}) {
    this.vueloService.addtoMisTarjetas(this.vueloService.getCurrentVuelo(), this.vueloService.getCurrentIndex());
    this.vueloService.addtoMisDatos(value);
    this.navCtrl.pop();
  }

}
