webpackJsonp([7],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuscaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_vuelo_service__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BuscaPage = /** @class */ (function () {
    function BuscaPage(navCtrl, navParams, vueloService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.vueloService = vueloService;
        this.vuelos = [];
    }
    BuscaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BuscaPage');
    };
    BuscaPage.prototype.ionViewWillEnter = function () {
        this.vuelos = this.vueloService.getVuelos();
    };
    ;
    BuscaPage.prototype.onAddVuelo = function (value, i) {
        this.vueloService.addMisVuelos(value);
        this, this.navCtrl.pop();
    };
    BuscaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-busca',template:/*ion-inline-start:"/Users/celiaromerogonzalez/Documents/GitHub/microp08/src/pages/busca/busca.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>Resultados</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n        <ion-card ion-item *ngFor="let vuelo of vuelos; let i=index">\n            <ion-grid>\n                <!-- IDA -->\n                <ion-row>\n                    <ion-item>\n                        <ion-title> {{vuelo.inicio}} hasta {{vuelo.destino}}</ion-title>\n                    </ion-item>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-1>\n                        <ion-item>\n                            <img src={{vuelo.aerolinea_foto}}>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col>\n                        <ion-item>\n                            <h2> {{vuelo.aerolinea}}</h2>\n                            <h3> {{vuelo.ida_inicio_hora}} - {{vuelo.ida_destino_hora}}</h3>\n                            <p> {{vuelo.ida_fecha | date:\'dd/MM/yy\'}}</p>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n                <!-- Vueltas -->\n                <ion-row>\n                    <ion-item>\n                        <ion-title>{{vuelo.destino}} hasta {{vuelo.inicio}}</ion-title>\n                    </ion-item>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-1>\n                        <ion-item>\n                            <img src={{vuelo.aerolinea_foto}}>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col>\n                        <ion-item>\n                    <h2> {{vuelo.aerolinea}}</h2>\n                    <h3> {{vuelo.vuelta_inicio_hora}} - {{vuelo.vuelta_destino_hora}}</h3>\n                    <p> {{vuelo.vuelta_fecha | date:\'dd/MM/yy\'}}</p>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n                <ion-row text-align = center>\n                    <ion-col>\n                        <ion-item>\n                            <h2><strong>Precio: </strong>{{vuelo.precio | number:\'1.0-0\'}}€</h2>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col>\n                    <button ion-item secondary (click)="onAddVuelo(vuelo, i)">Comprar</button>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-card>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/celiaromerogonzalez/Documents/GitHub/microp08/src/pages/busca/busca.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_vuelo_service__["a" /* VueloService */]])
    ], BuscaPage);
    return BuscaPage;
}());

//# sourceMappingURL=busca.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckinPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_vuelo_service__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CheckinPage = /** @class */ (function () {
    function CheckinPage(navCtrl, navParams, vueloService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.vueloService = vueloService;
    }
    CheckinPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CheckinPage');
    };
    CheckinPage.prototype.onSubmitCheckIn = function (value) {
        this.vueloService.addtoMisTarjetas(this.vueloService.getCurrentVuelo(), this.vueloService.getCurrentIndex());
        this.vueloService.addtoMisDatos(value);
        this.navCtrl.pop();
    };
    CheckinPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checkin',template:/*ion-inline-start:"/Users/celiaromerogonzalez/Documents/GitHub/microp08/src/pages/checkin/checkin.html"*/'<ion-header>\n  <ion-navbar color="dark">\n      <button ion-button menuToggle>\n	  <ion-icon name = "menu" ></ion-icon>\n    </button>\n    <ion-title>Check-In</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <form (ngSubmit)="onSubmitCheckIn(f.value)" #f="ngForm">\n    <ion-list>\n      <ion-item>\n        <ion-label floating>Nombre</ion-label>\n        <ion-input type="text" name="nombre" ngModel required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Numero de Pasaporte</ion-label>\n        <ion-input type="text" name="pasaporte" ngModel required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Numero de Telefono de Emergencia</ion-label>\n        <ion-input type="text" name="telefono" ngModel required></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button block type="submit" [disabled]="!f.valid">Aceptar</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/celiaromerogonzalez/Documents/GitHub/microp08/src/pages/checkin/checkin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_vuelo_service__["a" /* VueloService */]])
    ], CheckinPage);
    return CheckinPage;
}());

//# sourceMappingURL=checkin.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfoPage = /** @class */ (function () {
    function InfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfoPage');
    };
    InfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info',template:/*ion-inline-start:"/Users/celiaromerogonzalez/Documents/GitHub/microp08/src/pages/info/info.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title><ion-icon name="information-circle"></ion-icon> Información</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et porta felis. Etiam sit amet lacinia metus. Ut id cursus mauris. Mauris efficitur imperdiet nisl.\n      Proin cursus malesuada dapibus. Fusce quis tincidunt lorem, eget consequat sapien. Cras pulvinar porttitor molestie. Integer a viverra ligula, vel malesuada nisl.\n      Maecenas id lectus at quam imperdiet feugiat nec in nisl. Aenean tristique mollis eros a molestie. Donec tempus ante at velit finibus, ut varius nisi congue.\n      Etiam tincidunt dignissim nunc, non elementum metus pretium sed. Praesent ac tincidunt mauris. Duis et lacus arcu. Sed blandit imperdiet lorem, a eleifend turpis tristique ultrices.\n      Etiam egestas ornare neque at pellentesque. Maecenas sit amet augue sed nisl tristique cursus. Curabitur placerat bibendum arcu, a iaculis arcu tempor ut.\n      Aenean luctus tellus sem, ut venenatis tellus condimentum at.</h3>\n</ion-content>\n'/*ion-inline-end:"/Users/celiaromerogonzalez/Documents/GitHub/microp08/src/pages/info/info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], InfoPage);
    return InfoPage;
}());

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MisVuelosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_vuelo_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkin_checkin__ = __webpack_require__(108);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MisVuelosPage = /** @class */ (function () {
    function MisVuelosPage(navCtrl, navParams, vueloService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.vueloService = vueloService;
    }
    MisVuelosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MisVuelosPage');
    };
    MisVuelosPage.prototype.ionViewWillEnter = function () {
        this.misVuelos$ = this.vueloService
            .getMisVuelos()
            .snapshotChanges()
            .map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    };
    ;
    MisVuelosPage.prototype.onStartCheckIn = function (value, i) {
        this.vueloService.setCurrentVuelo(value, i);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__checkin_checkin__["a" /* CheckinPage */]);
    };
    MisVuelosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mis-vuelos',template:/*ion-inline-start:"/Users/celiaromerogonzalez/Documents/GitHub/microp08/src/pages/mis-vuelos/mis-vuelos.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title><ion-icon name="plane"></ion-icon> Mis Vuelos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n      <ion-card ion-item *ngFor="let vuelo of misVuelos$ | async; let i=index">\n        <ion-grid>\n            <!-- IDA -->\n            <ion-row>\n              <ion-item>\n                <ion-title> {{vuelo.inicio}} hasta {{vuelo.destino}}</ion-title>\n              </ion-item>\n            </ion-row>\n            <ion-row>\n              <ion-col col-1>\n                <ion-item>\n                    <img src={{vuelo.aerolinea_foto}}>\n                </ion-item>\n              </ion-col>\n              <ion-col>\n                <ion-item>\n                  <h2> {{vuelo.aerolinea}}</h2>\n                  <h3> {{vuelo.ida_inicio_hora}} - {{vuelo.ida_destino_hora}}</h3>\n                  <p> {{vuelo.ida_fecha | date:\'dd/MM/yy\'}}</p>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <!-- Vueltas -->\n            <ion-row>\n              <ion-item>\n                  <ion-title>{{vuelo.destino}} hasta {{vuelo.inicio}}</ion-title>\n              </ion-item>\n            </ion-row>\n            <ion-row>\n              <ion-col col-1>\n                  <ion-item>\n                      <img src={{vuelo.aerolinea_foto}}>\n                  </ion-item>\n              </ion-col>\n              <ion-col>\n                <ion-item>\n                  <h2> {{vuelo.aerolinea}}</h2>\n                  <h3> {{vuelo.vuelta_inicio_hora}} - {{vuelo.vuelta_destino_hora}}</h3>\n                  <p> {{vuelo.vuelta_fecha | date:\'dd/MM/yy\'}}</p>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col></ion-col>\n              <ion-col>\n                <button ion-item secondary (click)="onStartCheckIn(vuelo, i)">Check-In</button>\n              </ion-col>\n            </ion-row>\n        </ion-grid>\n      </ion-card>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/celiaromerogonzalez/Documents/GitHub/microp08/src/pages/mis-vuelos/mis-vuelos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_vuelo_service__["a" /* VueloService */]])
    ], MisVuelosPage);
    return MisVuelosPage;
}());

//# sourceMappingURL=mis-vuelos.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TarjetasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_vuelo_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__una_tarjeta_una_tarjeta__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TarjetasPage = /** @class */ (function () {
    function TarjetasPage(navCtrl, navParams, vueloService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.vueloService = vueloService;
        this.misTarjetas = [];
        this.misDatos = [];
    }
    TarjetasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TarjetasPage');
    };
    TarjetasPage.prototype.ionViewWillEnter = function () {
        this.misTarjetas = this.vueloService.getMisTarjetas();
        this.misDatos = this.vueloService.getTarjetasDatos();
    };
    ;
    TarjetasPage.prototype.onLoadTarjeta = function (value, i) {
        this.vueloService.setCurrentVuelo(value, i);
        this.vueloService.setCurrentDatos(this.misDatos[i]);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__una_tarjeta_una_tarjeta__["a" /* UnaTarjetaPage */]);
    };
    TarjetasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tarjetas',template:/*ion-inline-start:"/Users/celiaromerogonzalez/Documents/GitHub/microp08/src/pages/tarjetas/tarjetas.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title><ion-icon name="paper"></ion-icon> Tarjetas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n        <button ion-item *ngFor="let vuelo of misTarjetas; let i=index" (click)="onLoadTarjeta(vuelo, i)">\n          <ion-card>\n            <ion-grid>\n                <!-- IDA -->\n                <ion-row>\n                  <ion-item>\n                    <ion-title> {{vuelo.inicio}} hasta {{vuelo.destino}}</ion-title>\n                  </ion-item>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-1>\n                    <ion-item>\n                        <img src={{vuelo.aerolinea_foto}}>\n                    </ion-item>\n                  </ion-col>\n                  <ion-col>\n                    <ion-item>\n                      <h2> {{vuelo.aerolinea}}</h2>\n                      <h3> {{vuelo.ida_inicio_hora}} - {{vuelo.ida_destino_hora}}</h3>\n                      <p> {{vuelo.ida_fecha | date:\'dd/MM/yy\'}}</p>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <!-- Vueltas -->\n                <ion-row>\n                  <ion-item>\n                      <ion-title>{{vuelo.destino}} hasta {{vuelo.inicio}}</ion-title>\n                  </ion-item>\n                </ion-row>\n                <ion-row>\n                  <ion-col col-1>\n                      <ion-item>\n                          <img src={{vuelo.aerolinea_foto}}>\n                      </ion-item>\n                  </ion-col>\n                  <ion-col>\n                    <ion-item>\n                      <h2> {{vuelo.aerolinea}}</h2>\n                      <h3> {{vuelo.vuelta_inicio_hora}} - {{vuelo.vuelta_destino_hora}}</h3>\n                      <p> {{vuelo.vuelta_fecha | date:\'dd/MM/yy\'}}</p>\n                    </ion-item>\n                  </ion-col>\n                </ion-row>\n                <ion-row>\n                  <ion-col></ion-col>\n                  <ion-col>\n                    <button ion-item secondary (click)="onStartCheckIn(vuelo, i)">Check-In</button>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-card>\n        </button>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/celiaromerogonzalez/Documents/GitHub/microp08/src/pages/tarjetas/tarjetas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_vuelo_service__["a" /* VueloService */]])
    ], TarjetasPage);
    return TarjetasPage;
}());

//# sourceMappingURL=tarjetas.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnaTarjetaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_vuelo_service__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UnaTarjetaPage = /** @class */ (function () {
    function UnaTarjetaPage(navCtrl, navParams, vueloService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.vueloService = vueloService;
        this.tarjeta = [];
        this.datos = [];
    }
    UnaTarjetaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UnaTarjetaPage');
    };
    UnaTarjetaPage.prototype.ionViewWillEnter = function () {
        this.tarjeta.push(this.vueloService.getCurrentVuelo());
        this.datos.push(this.vueloService.getCurrentDatos());
    };
    ;
    UnaTarjetaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-una-tarjeta',template:/*ion-inline-start:"/Users/celiaromerogonzalez/Documents/GitHub/microp08/src/pages/una-tarjeta/una-tarjeta.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>Tu Tarjeta</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor="let vuelo of tarjeta">\n\n\n      <ion-grid>\n        <!-- Header -->\n        <br>\n        <ion-row>\n          <ion-col col-2>\n              <!-- Update this logo to match airline -->\n              <img src={{vuelo.aerolinea_foto}}>\n          </ion-col>\n          <ion-col>\n              <ion-item>\n                <p>Numero de Vuelo:</p>\n                <h4>9949</h4>\n              </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <p>Puerta:</p>\n              <h4>9</h4>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <!-- Lugares -->\n        <ion-row text-center>\n          <ion-col>\n              <ion-title>{{vuelo.inicio}} </ion-title>\n          </ion-col>\n          <ion-col>\n          </ion-col>\n          <ion-col>\n             <ion-title>{{vuelo.destino}}</ion-title>\n          </ion-col>\n        </ion-row>\n        <!-- Times / Groups -->\n        <ion-row>\n          <ion-col>\n              <ion-item>\n                  <p> Día:</p>\n                  <h4> {{vuelo.vuelta_fecha | date:\'dd/MMMM/yy\'}}</h4>\n              </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n                <p>Hora de Salida:</p>\n                <h4>{{vuelo.ida_inicio_hora}}</h4>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <p>Hora de Embarque:</p>\n              <h4>{{vuelo.ida_inicio_hora}}</h4>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n              <ion-item>\n                <h2>Nombre</h2>\n                <ion-item *ngFor="let dato of datos">\n                    <h1>{{dato.nombre}}</h1>\n                </ion-item>7e8\n              </ion-item>\n            </ion-col>\n        </ion-row>\n        <ion-row text-center>\n          <ion-col>\n              <ion-item>\n                  <img src="../../assets/imgs/qr_code.png">\n              </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <!-- Vuelta -->\n      <ion-grid>\n          <!-- Header -->\n          <ion-row>\n            <ion-col col-2>\n                <!-- Update this logo to match airline -->\n                <img src={{vuelo.aerolinea_foto}}>\n            </ion-col>\n            <ion-col>\n                <ion-item>\n                  <p>Numero de Vuelo:</p>\n                  <h4>939</h4>\n                </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <p>Puerta:</p>\n                <h4>10</h4>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <!-- Lugares -->\n          <ion-row text-center>\n            <ion-col>\n                <ion-title>{{vuelo.destino}} </ion-title>\n            </ion-col>\n            <ion-col>\n               <ion-title>{{vuelo.inicio}}</ion-title>\n            </ion-col>\n          </ion-row>\n          <!-- Times / Groups -->\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                  <p> Día:</p>\n                  <h4> {{vuelo.vuelta_fecha | date:\'dd/MMMM/yy\'}}</h4>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                  <p>Hora de Salida:</p>\n                  <h4>{{vuelo.vuelta_inicio_hora}}</h4>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <p>Hora de Embarque:</p>\n                <h4>{{vuelo.vuelta_inicio_hora}}</h4>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col>\n                <ion-item>\n                  <h2>Nombre</h2>\n                  <ion-item *ngFor="let dato of datos">\n                      <h1>{{dato.nombre}}</h1>\n                  </ion-item>\n                </ion-item>\n              </ion-col>\n          </ion-row>\n          <ion-row text-center>\n            <ion-col>\n                <ion-item>\n                    <img src="../../assets/imgs/qr_code.png">\n                </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/celiaromerogonzalez/Documents/GitHub/microp08/src/pages/una-tarjeta/una-tarjeta.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__services_vuelo_service__["a" /* VueloService */]])
    ], UnaTarjetaPage);
    return UnaTarjetaPage;
}());

//# sourceMappingURL=una-tarjeta.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__busca_busca__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReservasPage = /** @class */ (function () {
    function ReservasPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.searchQuery = '';
    }
    ReservasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReservasPage');
    };
    ReservasPage.prototype.initializeItems = function () {
        this.items = [
            'Amsterdam',
            'Bogota',
            'Buenos Aires',
            'Cairo',
            'Dhaka',
            'Edinburgh',
            'Geneva',
            'Genoa',
            'Glasglow',
            'Hanoi',
            'Hong Kong',
            'Islamabad',
            'Istanbul',
            'Jakarta',
            'Kiel',
            'Kyoto',
            'Le Havre',
            'Lebanon',
            'Lhasa',
            'Lima',
            'London',
            'Los Angeles',
            'Madrid',
            'Manila',
            'New York',
            'Olympia',
            'Oslo',
            'Panama City',
            'Peking',
            'Philadelphia',
            'San Francisco',
            'Seoul',
            'Taipeh',
            'Tel Aviv',
            'Tokio',
            'Uelzen',
            'Washington'
        ];
    };
    ReservasPage.prototype.getItems = function (ev) {
        this.initializeItems();
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    ReservasPage.prototype.onBuscar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__busca_busca__["a" /* BuscaPage */]);
    };
    ReservasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reservas',template:/*ion-inline-start:"/Users/celiaromerogonzalez/Documents/GitHub/microp08/src/pages/reservas/reservas.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title><ion-icon name="search"></ion-icon> Busca tu vuelo</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="mainScreen">\n    <form (ngSubmit)="onBuscar(f.value)" #f="ngForm">\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title> Seleciona tu origen y destino </ion-card-title>\n        </ion-card-header>\n\n        <ion-card>\n          <ion-item>\n            <ion-label floating>Origen</ion-label>\n            <ion-input type="text" name="userOrigen" ngModel required></ion-input>\n          </ion-item>\n        </ion-card>\n        <ion-card>\n          <ion-item>\n            <ion-label floating>Destino</ion-label>\n            <ion-input type="text" name="userDestino" ngModel required></ion-input>\n          </ion-item>\n        </ion-card>\n\n      <ion-card-header>\n        <ion-card-title>Selecciona tus fechas</ion-card-title>\n      </ion-card-header>\n\n      <ion-card>\n          <ion-item>\n            <ion-label floating>Ida  <ion-icon name="ios-calendar-outline"></ion-icon></ion-label>\n            <ion-datetime display-format="MMMM DD" min="2019-03-01" max="2019" name="userFechaIda" ngModel required></ion-datetime>\n          </ion-item>\n      </ion-card>\n      <ion-card>\n        <ion-item>\n          <ion-label floating>Vuelta  <ion-icon name="ios-calendar-outline"></ion-icon></ion-label>\n          <ion-datetime display-format="MMMM DD" min="2019-03-01" max="2019" name="userFechaVuelta" ngModel required></ion-datetime>\n        </ion-item>\n      </ion-card>\n      <br>\n      <button ion-button secondary [disabled]="!f.valid">Buscar</button>\n    </ion-card>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/celiaromerogonzalez/Documents/GitHub/microp08/src/pages/reservas/reservas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ReservasPage);
    return ReservasPage;
}());

//# sourceMappingURL=reservas.js.map

/***/ }),

/***/ 124:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 124;

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/busca/busca.module": [
		340,
		6
	],
	"../pages/checkin/checkin.module": [
		341,
		5
	],
	"../pages/info/info.module": [
		342,
		4
	],
	"../pages/mis-vuelos/mis-vuelos.module": [
		343,
		3
	],
	"../pages/reservas/reservas.module": [
		346,
		2
	],
	"../pages/tarjetas/tarjetas.module": [
		344,
		1
	],
	"../pages/una-tarjeta/una-tarjeta.module": [
		345,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 166;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/celiaromerogonzalez/Documents/GitHub/microp08/src/pages/home/home.html"*/'<ion-header>\n  <!-- <ion-navbar color="dark"> -->\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title><ion-icon name="home"></ion-icon> Home</ion-title>\n  </ion-navbar>\n  <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">\n</ion-header>\n\n<ion-content padding>\n  <br><h1>Vuelos Europeos S.A.</h1><br>\n</ion-content>\n'/*ion-inline-end:"/Users/celiaromerogonzalez/Documents/GitHub/microp08/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(248);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_reservas_reservas__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_busca_busca__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_mis_vuelos_mis_vuelos__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_checkin_checkin__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tarjetas_tarjetas__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_una_tarjeta_una_tarjeta__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_info_info__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_vuelo_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_firebase_credentials__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_reservas_reservas__["a" /* ReservasPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_busca_busca__["a" /* BuscaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_mis_vuelos_mis_vuelos__["a" /* MisVuelosPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_checkin_checkin__["a" /* CheckinPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tarjetas_tarjetas__["a" /* TarjetasPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_una_tarjeta_una_tarjeta__["a" /* UnaTarjetaPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_info_info__["a" /* InfoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/busca/busca.module#BuscaPageModule', name: 'BuscaPage', segment: 'busca', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkin/checkin.module#CheckinPageModule', name: 'CheckinPage', segment: 'checkin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info/info.module#InfoPageModule', name: 'InfoPage', segment: 'info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mis-vuelos/mis-vuelos.module#MisVuelosPageModule', name: 'MisVuelosPage', segment: 'mis-vuelos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tarjetas/tarjetas.module#TarjetasPageModule', name: 'TarjetasPage', segment: 'tarjetas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/una-tarjeta/una-tarjeta.module#UnaTarjetaPageModule', name: 'UnaTarjetaPage', segment: 'una-tarjeta', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reservas/reservas.module#ReservasPageModule', name: 'ReservasPage', segment: 'reservas', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_16_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_15__app_firebase_credentials__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_reservas_reservas__["a" /* ReservasPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_busca_busca__["a" /* BuscaPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_mis_vuelos_mis_vuelos__["a" /* MisVuelosPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_checkin_checkin__["a" /* CheckinPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tarjetas_tarjetas__["a" /* TarjetasPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_una_tarjeta_una_tarjeta__["a" /* UnaTarjetaPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_info_info__["a" /* InfoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__services_vuelo_service__["a" /* VueloService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VueloService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VueloService = /** @class */ (function () {
    function VueloService(db) {
        this.db = db;
        this.vuelos = [
            {
                "aerolinea": "British Airways",
                "aerolinea_foto": "../../assets/imgs/britishairways.png",
                "inicio": "Madrid",
                "destino": "Paris",
                "ida_inicio_hora": "16:30",
                "ida_destino_hora": "18:30",
                "ida_fecha": new Date(2019, 10, 1),
                "vuelta_inicio_hora": "11:30",
                "vuelta_destino_hora": "13:30",
                "vuelta_fecha": new Date(2019, 10, 2),
                "precio": 150
            },
            {
                "aerolinea": "Ryanair",
                "aerolinea_foto": "../../assets/imgs/ryanair.png",
                "inicio": "Madrid",
                "destino": "Paris",
                "ida_inicio_hora": "12:30",
                "ida_destino_hora": "14:30",
                "ida_fecha": new Date(2019, 10, 1),
                "vuelta_inicio_hora": "15:30",
                "vuelta_destino_hora": "17:30",
                "vuelta_fecha": new Date(2019, 10, 2),
                "precio": 199
            },
            {
                "aerolinea": "Ibería",
                "aerolinea_foto": "../../assets/imgs/iberia.png",
                "inicio": "Madrid",
                "destino": "Paris",
                "ida_inicio_hora": "10:30",
                "ida_destino_hora": "12:30",
                "ida_fecha": new Date(2019, 10, 1),
                "vuelta_inicio_hora": "12:30",
                "vuelta_destino_hora": "15:30",
                "vuelta_fecha": new Date(2019, 10, 2),
                "precio": 300
            }
        ];
        //private mis_vuelos: Vuelo[] =[];
        this.mis_tarjetas = [];
        this.tarjetas_datos = [];
        this.mis_vuelosRef = this.db.list('micro-practica-8');
    }
    VueloService.prototype.getVuelos = function () {
        return this.vuelos;
    };
    // addtoMisVuelos(value: Vuelo, i) {
    //     this.mis_vuelos.push(value);
    //     this.vuelos.splice(i,1);
    // }
    VueloService.prototype.addMisVuelos = function (value) {
        return this.mis_vuelosRef.push(value);
    };
    VueloService.prototype.addtoMisTarjetas = function (value, i) {
        this.mis_tarjetas.push(value);
        // this.mis_vuelos.splice(i,1);
        this.setCurrentVuelo(null, null);
    };
    VueloService.prototype.addtoMisDatos = function (value) {
        this.tarjetas_datos.push(value);
    };
    VueloService.prototype.setCurrentVuelo = function (value, i) {
        this.currentVuelo = value;
        this.currentIndex = i;
    };
    VueloService.prototype.setCurrentDatos = function (value) {
        this.currentDatos = value;
    };
    VueloService.prototype.getCurrentVuelo = function () {
        return this.currentVuelo;
    };
    VueloService.prototype.getCurrentIndex = function () {
        return this.currentIndex;
    };
    VueloService.prototype.getCurrentDatos = function () {
        return this.currentDatos;
    };
    VueloService.prototype.getMisVuelos = function () {
        //return this.mis_vuelos;
        return this.mis_vuelosRef;
    };
    VueloService.prototype.getMisTarjetas = function () {
        return this.mis_tarjetas;
    };
    VueloService.prototype.getTarjetasDatos = function () {
        return this.tarjetas_datos;
    };
    VueloService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], VueloService);
    return VueloService;
}());

//# sourceMappingURL=vuelo.service.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_reservas_reservas__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_mis_vuelos_mis_vuelos__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tarjetas_tarjetas__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_info_info__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Reservas', component: __WEBPACK_IMPORTED_MODULE_5__pages_reservas_reservas__["a" /* ReservasPage */] },
            { title: 'Mis Vuelos', component: __WEBPACK_IMPORTED_MODULE_6__pages_mis_vuelos_mis_vuelos__["a" /* MisVuelosPage */] },
            { title: 'Tarjetas', component: __WEBPACK_IMPORTED_MODULE_7__pages_tarjetas_tarjetas__["a" /* TarjetasPage */] },
            { title: 'Información', component: __WEBPACK_IMPORTED_MODULE_8__pages_info_info__["a" /* InfoPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.openSite = function () {
        window.open('https://google.com');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/celiaromerogonzalez/Documents/GitHub/microp08/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n      <button menuClose ion-item (click)="openSite()">Website</button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/celiaromerogonzalez/Documents/GitHub/microp08/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyBRGiWtIPeAEPjcl9rziUfiNhoTsmlWtN4",
    authDomain: "micro-practica-8.firebaseapp.com",
    databaseURL: "https://micro-practica-8.firebaseio.com",
    projectId: "micro-practica-8",
    storageBucket: "micro-practica-8.appspot.com",
    messagingSenderId: "761386424566"
};
//# sourceMappingURL=firebase.credentials.js.map

/***/ })

},[228]);
//# sourceMappingURL=main.js.map