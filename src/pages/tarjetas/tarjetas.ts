import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VueloService } from '../../services/vuelo.service';
import { Vuelo } from '../../models/vuelo.model';
import { UnaTarjetaPage } from '../una-tarjeta/una-tarjeta';
import { Datos } from '../../models/datos.model';

@IonicPage()
@Component({
  selector: 'page-tarjetas',
  templateUrl: 'tarjetas.html',
})
export class TarjetasPage {

  misTarjetas: Vuelo[] =[];
  misDatos: Datos[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private vueloService: VueloService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TarjetasPage');
  }

  ionViewWillEnter(){
    this.misTarjetas = this.vueloService.getMisTarjetas();
    this.misDatos = this.vueloService.getTarjetasDatos();
  };

  onLoadTarjeta(value: Vuelo, i) {
    this.vueloService.setCurrentVuelo(value, i);
    this.vueloService.setCurrentDatos(this.misDatos[i]);
    this.navCtrl.push(UnaTarjetaPage);
  }
}
