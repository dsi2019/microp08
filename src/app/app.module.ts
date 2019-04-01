import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ReservasPage } from '../pages/reservas/reservas';
import { BuscaPage } from '../pages/busca/busca';
import { MisVuelosPage } from '../pages/mis-vuelos/mis-vuelos';
import { CheckinPage } from '../pages/checkin/checkin';
import { TarjetasPage } from '../pages/tarjetas/tarjetas';
import { UnaTarjetaPage } from '../pages/una-tarjeta/una-tarjeta';
import { InfoPage } from '../pages/info/info';
import { VueloService } from '../services/vuelo.service'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ReservasPage,
    BuscaPage,
    MisVuelosPage,
    CheckinPage,
    TarjetasPage,
    UnaTarjetaPage,
    InfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ReservasPage,
    BuscaPage,
    MisVuelosPage,
    CheckinPage,
    TarjetasPage,
    UnaTarjetaPage,
    InfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    VueloService
  ]
})
export class AppModule {}
