import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VueloService } from '../../services/vuelo.service';
import { Vuelo } from '../../models/vuelo.model';
import { Datos } from '../../models/datos.model';

@IonicPage()
@Component({
  selector: 'page-una-tarjeta',
  templateUrl: 'una-tarjeta.html',
})
export class UnaTarjetaPage {
  tarjeta: Vuelo[] = [];
  datos: Datos[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private vueloService: VueloService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UnaTarjetaPage');
  }

  ionViewWillEnter(){
    this.tarjeta.push(this.vueloService.getCurrentVuelo());
    this.datos.push(this.vueloService.getCurrentDatos());
  };

}
