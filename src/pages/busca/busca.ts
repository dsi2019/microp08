import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VueloService } from '../../services/vuelo.service';
import { Vuelo } from '../../models/vuelo.model';

@IonicPage()
@Component({
  selector: 'page-busca',
  templateUrl: 'busca.html',
})
export class BuscaPage {

  vuelos: Vuelo[] =[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private vueloService: VueloService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuscaPage');
  }

  ionViewWillEnter(){
    this.vuelos = this.vueloService.getVuelos();
  };

  onAddVuelo(value: Vuelo, i){
    this.vueloService.addtoMisVuelos(value, i);
    this,this.navCtrl.pop();
  }
}