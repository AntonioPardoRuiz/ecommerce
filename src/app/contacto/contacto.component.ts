import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  //Definimos las variables 
  lat: number = 38.3336;
  lng: number = -0.508631;
  zoom: number = 20;

  constructor() { }

  ngOnInit(): void {
  }

}
