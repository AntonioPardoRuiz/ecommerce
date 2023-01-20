import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ArticuloModel } from '../model/ArticuloModel';
import { ArticleService }  from '../services/ArticlesService';
import {HttpClientModule, HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-articlelist',
  templateUrl: './articlelist.component.html',
  styleUrls: ['./articlelist.component.css'],
  providers: [ArticleService]
})
export class ArticlelistComponent implements OnInit {
    //Valor que recibiremos del html donde se indica la posicion de cada proceso. 
    @Input() id:number =0;
    @Output() ArticleQuantityChange = new EventEmitter<string>();
      //Definimos el arrary articulos que recuperamos del servicio,
    articulos:Array<ArticuloModel> =[];
    
    //Definimos todas las variables.
    pulsa = false;
    boton = true;

  //Constructor
  constructor(
    private articleService: ArticleService, private http:HttpClient
  ) { }

  ngOnInit(): void {
    //Tengo que cargar en el articulos.En el inicio del proceso.
    console.log("Cargamos los articulos")
    this.articulos = this.articleService.getArticles();
    console.log(this.articulos);
  }


  getColor(){
   // console.log("getColor");
   const color = this.articleService.getColor();
   console.log("Obtenemos el valor"+color);
    return color;
  }
    
  getColorSubscrito(){
    const colorSubscrito = this.articleService.getColorSubscrito();
    console.log("Obtenemos el valor"+colorSubscrito);
    return colorSubscrito;
  }

  subscribirse(id:number){
    console.log("Servicio Subscribirse");
    console.log(id);
    let posicion = id-1

    //this.pulsa = true;
    //Recuperamos la suma el articulo y lo devolvemos. 
    let suma = this.articleService.getsubscribirse(posicion);
    console.log("suma"+suma);
    console.log(this.articulos[posicion].numeroVisitas);
    this.articulos[posicion].numeroVisitas = suma;
  }

  eliminarSubscripcion(id:number){
    //Incrementamos le valor de numero de visitas
    console.log("eliminar subscripcion");
    console.log(id);
    let posicion = id-1;
    //Recuperamos todos los articulos, nos devuelve un array. 
    let resta = this.articleService.deleteSubscripcion(posicion);
    this.articulos[posicion].numeroVisitas = resta;
  }

  /** ESTA FUNCION UNICAMENTE LA VAMOS A UTILIZAR UNA UNICA VEZ */
  cargarDatos(){
  //  this.articleService.createAndStoreArticulos();
  }
  



}
