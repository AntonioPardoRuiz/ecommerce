import { Component, OnInit } from '@angular/core';
import { ArticuloModel } from '../model/ArticuloModel';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  pulsa = false;
  boton = true;


  constructor() { }

  ngOnInit(): void {
    console.log("articulo");
  }

  //Definimos el Json.
  articulo:ArticuloModel = {
    id: 1,
    nombre: "Agroengineering",
    creador: "DevArt",
    fechaCreacion:"2022-01-01",
    url:"",
    descripcion:"Software para el sector Agrario",
    numeroVisitas:5,
    calificacion:4,
    tematica:"aplicacion sector agrario",
    img:"assets/agroengineering.png",
    precio:3000
  }

  //En cuanto se pulse al boton activamos un switch, q
  subscribirse(){
    console.log("subscribirse");
    this.pulsa = true;
   
    
    //Incrementamos le valor de numero de visitas
    this.articulo.numeroVisitas = this.articulo.numeroVisitas + 1; 
  }
  eliminarSubscripcion(){
    //Incrementamos le valor de numero de visitas
    this.articulo.numeroVisitas = this.articulo.numeroVisitas - 1;
    if(this.articulo.numeroVisitas == 0){
        this.boton = false;
    } 
    this.pulsa = false;
  }

  getColor(){
    console.log("getColor");
    return "#2D99E1";
  }
  
  getColorSubscrito(){
    console.log("Color");
    return "#E1502D";
  }
  
}
