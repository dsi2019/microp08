export interface Vuelo {
   aerolinea:string;
   aerolinea_foto:string;
   inicio:string;
   destino:string;

   ida_inicio_hora:string;
   ida_destino_hora:string;
   ida_fecha:Date;

   vuelta_inicio_hora:string;
   vuelta_destino_hora:string;
   vuelta_fecha:Date;

   precio:number;
};