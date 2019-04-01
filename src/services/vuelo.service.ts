import { Vuelo } from "../models/vuelo.model";
import { Datos } from "../models/datos.model";

export class VueloService{

    private vuelos: Vuelo[] =[
        {
            "aerolinea":"British Airways",
            "aerolinea_foto":"../../assets/imgs/britishairways.png",
            "inicio":"Madrid",
            "destino":"Paris",
            "ida_inicio_hora":"16:30",
            "ida_destino_hora":"18:30",
            "ida_fecha": new Date​(​2019,​10​,​1​),
            "vuelta_inicio_hora": "11:30",
            "vuelta_destino_hora": "13:30",
            "vuelta_fecha": new Date(2019,10,2),
            "precio": 150
        },
        {
            "aerolinea":"Ryanair",
            "aerolinea_foto":"../../assets/imgs/ryanair.png",
            "inicio":"Madrid",
            "destino":"Paris",
            "ida_inicio_hora":"12:30",
            "ida_destino_hora":"14:30",
            "ida_fecha": new Date​(​2019,​10​,​1​),
            "vuelta_inicio_hora": "15:30",
            "vuelta_destino_hora": "17:30",
            "vuelta_fecha": new Date(2019,10,2),
            "precio": 199
        },
        {
            "aerolinea":"Ibería",
            "aerolinea_foto":"../../assets/imgs/iberia.png",
            "inicio":"Madrid",
            "destino":"Paris",
            "ida_inicio_hora":"10:30",
            "ida_destino_hora":"12:30",
            "ida_fecha": new Date​(​2019,​10​,​1​),
            "vuelta_inicio_hora": "12:30",
            "vuelta_destino_hora": "15:30",
            "vuelta_fecha": new Date(2019,10,2),
            "precio": 300}
        ];

        private mis_vuelos: Vuelo[] =[];
        private mis_tarjetas: Vuelo[] = [];
        private tarjetas_datos: Datos[] = [];
        private currentVuelo: Vuelo;
        private currentIndex: any;
        private currentDatos: Datos;

    constructor(){
    }

    getVuelos(){
        return this.vuelos;
    }

    addtoMisVuelos(value: Vuelo, i) {
        this.mis_vuelos.push(value);
        this.vuelos.splice(i,1);
    }

    addtoMisTarjetas(value: Vuelo, i) {
        this.mis_tarjetas.push(value);
        this.mis_vuelos.splice(i,1);
        this.setCurrentVuelo(null, null);
    }

    addtoMisDatos(value: Datos) {
        this.tarjetas_datos.push(value);
    }

    setCurrentVuelo(value: Vuelo, i) {
        this.currentVuelo = value;
        this.currentIndex = i;
    }

    setCurrentDatos(value: Datos) {
        this.currentDatos = value;
    }

    getCurrentVuelo() {
        return this.currentVuelo;
    }

    getCurrentIndex() {
        return this.currentIndex;
    }

    getCurrentDatos() {
        return this.currentDatos;
    }

    getMisVuelos() {
        return this.mis_vuelos;
    }

    getMisTarjetas() {
        return this.mis_tarjetas;
    }

    getTarjetasDatos() {
        return this.tarjetas_datos;
    }
}