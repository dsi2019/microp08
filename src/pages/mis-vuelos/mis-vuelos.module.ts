import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MisVuelosPage } from './mis-vuelos';

@NgModule({
  declarations: [
    MisVuelosPage,
  ],
  imports: [
    IonicPageModule.forChild(MisVuelosPage),
  ],
})
export class MisVuelosPageModule {}
