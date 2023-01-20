import { Injectable } from '@angular/core';
import { ArticuloModel } from '../model/ArticuloModel';
//Importamos HttpClient
import { HttpClient } from '@angular/common/http';
//Nos traemos la clase map. 
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArticleService{
  //Definimos los datos. 
  loadedArticulos:ArticuloModel[] =[];

  constructor(private http:HttpClient) {}

 //  articulos:Array<ArticuloModel> =[{
 //   id:1,
 //   nombre: "Agroengineering",
 //   creador: "DevArt",
 //   fechaCreacion:"2022-01-01",
 //   url:"",
 //   descripcion:"Software para el sector Agrario",
 //   numeroVisitas:5,
 //   calificacion:4,
 //   tematica:"aplicacion sector agrario",
 //   img:"assets/agroengineering.png",
 //   precio:3000,
 // },
 // {
 //   id: 2,
 //   nombre: "Mi Familia",
 //   creador: "DevArt",
 //   fechaCreacion:"2022-01-01",
 //   url:"",
 //   descripcion:"Su aplicacion para la gestion de los regalos",
 //   numeroVisitas:100,
 //   calificacion:3.5,
 //   tematica:"Aplicacion Movil para IOS/ANDROID para la gestion de regalos por familia",
 //   img:"assets/mifamilia.jpg",
 //   precio:3
 // },
 // {
 //   id: 3,
 //   nombre: "Catchlead",
 //   creador: "DevArt",
 //   fechaCreacion:"2022-01-01",
 //   url:"",
 //   descripcion:"Aplicacion para la gestion Comercial",
 //   numeroVisitas:3,
 //   calificacion:4,
 //   tematica:"Aplicacion Movil para IOS/ANDROID para la gestion Comercial",
 //   img:"assets/catchlead.jpg",
 //   precio:2000

 // },
//] 

//Lo usaremos unicamente una vez para cargar los articulos
 // createAndStoreArticulos()
 // {
 //   console.log("Cargar datos");
 //   //Recorremos articulos, para realizar los 3 posts que tenemos 
 //   for(var i=0; i<=this.articulos.length; i++){
 //       console.log("OncreatePost");
 //       const articuloData:ArticuloModel = this.articulos[i];
 //       console.log("Vemos el valor de articulo data");
 //       // Send Http request. Añadimos la url donde se almacenaran los datos.  
 //       this.http.post<{name:string}>(
 //       'https://bbddangular-913ce-default-rtdb.europe-west1.firebasedatabase.app/articulos.json',
 //       articuloData
 //       ).subscribe(responseData=> {
 //             console.log(responseData);
 //      })
 //   }
 // }  
    /* METODOS DEL SERVICIO */
    //Obtenemos los articulos. 
   // getArticles(){
   //     return this.articulos;

//    }

    getColor(){
        console.log("getColor");
        return "#2D99E1";
    }
        
    getColorSubscrito(){
        console.log("Color");
      return "#E1502D";
    }
    
      //Obtenemos el numero de visitas por cada elemento de los articulos.

      getsubscribirse(id:number){
    
        console.log("getsubscribirse");
        //this.pulsa = true;
        console.log(this.loadedArticulos[id].numeroVisitas);
        let numeroVisitas = this.loadedArticulos[id].numeroVisitas;
        console.log("Numero de Visitas");
        console.log(numeroVisitas);
        //Incrementamos le valor de numero de visitas
        let suma = numeroVisitas + 1; 
        console.log("Vemos la suma");
        //Actualizamos el numero de Visitas.
        //Devolvemos todo el array.
        return suma;
      
      }
    
    deleteSubscripcion(id:number){
        //Incrementamos le valor de numero de visitas
        console.log("deleteSubscripcion");
        //this.pulsa = true;
        console.log(this.loadedArticulos[id].numeroVisitas);
        let numeroVisitas = this.loadedArticulos[id].numeroVisitas;
        console.log("Numero de Visitas");
        console.log(numeroVisitas);
        //Decrementamos le valor de numero de visitas
        let resta = numeroVisitas - 1; 
        console.log("Vemos la suma");
        //Devolvemos todo el array.
        return resta;
        
        
}

  getData(){
      console.log("Llamamos a getData");
      return this.http
            .get<{[key:string]:ArticuloModel}>('https://bbddangular-913ce-default-rtdb.europe-west1.firebasedatabase.app/articulos.json') 
            .pipe(
                  map((responseData: { [id: string]: ArticuloModel }) =>{
                  const articulosArray: ArticuloModel[]= [];
                  for (const key in responseData){
                        console.log("Datos de Respuesta");
                        console.log(responseData[key]);
                        if (responseData.hasOwnProperty(key)){
                            articulosArray.push({...responseData[key]});
                            this.loadedArticulos.push({...responseData[key]});
                        }
                  }

            return articulosArray;
    }))
     
  }



    


}