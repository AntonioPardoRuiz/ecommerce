import { Component, OnInit } from '@angular/core';
import { ArticuloModel } from '../model/ArticuloModel';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //Definimos el Json.
  articulo:ArticuloModel = {
    id: 1,
    nombre: "DESCUBREN UNA ESTRELLA COMPLETAMENTE IMPOSIBLE EN EL UNIVERSO QUE HARÍA REPLANTEAR TODO",
    creador: "Will Project",
    fechaCreacion:"2022-01-01",
    url:"https://www.youtube.com/watch?v=k9bktkxXbR4",
    descripcion:"Tertulia Jordi Wild",
    numeroVisitas:200.000,
    calificacion:4,
    tematica:"fisica",
    img:"assets/images/wildproject.png"
  }
  
}
