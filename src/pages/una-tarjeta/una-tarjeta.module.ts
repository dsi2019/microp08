import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UnaTarjetaPage } from './una-tarjeta';

@NgModule({
  declarations: [
    UnaTarjetaPage,
  ],
  imports: [
    IonicPageModule.forChild(UnaTarjetaPage),
  ],
})
export class UnaTarjetaPageModule {}
