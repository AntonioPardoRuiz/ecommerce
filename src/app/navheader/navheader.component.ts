import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navheader',
  templateUrl: './navheader.component.html',
  styleUrls: ['./navheader.component.css']
})
export class NavheaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  accederInicio(){
    console.log("Accedemos a Inicio");
  }

  accederArticulo(){
    console.log("Accedemos a Articulo");
    window.open("articulo");

  }

}
