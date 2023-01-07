import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {
  datos = new Array;
  //Datos para el array
  nombre = "";
  apellidos= "";
  //Metodo para añadir valores al array
  Agregar(){
    if(this.nombre!=""){
    this.datos.push({'Nombre':this.nombre,'Apellidos':this.apellidos})
    this.nombre="";
    this.apellidos="";}
  }

  constructor() { }

  ngOnInit(): void {
  }

}
