import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VueloService } from '../../services/vuelo.service';
import { Vuelo } from '../../models/vuelo.model';
import { CheckinPage } from '../checkin/checkin';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-mis-vuelos',
  templateUrl: 'mis-vuelos.html',
})
export class MisVuelosPage {

  misVuelos$: Observable<Vuelo[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private vueloService: VueloService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MisVuelosPage');
  }

  ionViewWillEnter(){
    this.misVuelos$ = this.vueloService
    .getMisVuelos()
    .snapshotChanges()
    .map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }));
      }
    );
  };

  onStartCheckIn(value: Vuelo, i) {
    this.vueloService.setCurrentVuelo(value, i);
    this.navCtrl.push(CheckinPage);
  }
}