import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component implements OnInit {
   tarea = "";
   descripcion = "";
   tareas = new Array;
   disablebtn: boolean = true;
   Agregar() {
    if(this.tarea!=""){
    this.tareas.push({ Nombre: this.tarea, Descripcion: this.descripcion });
    this.tarea = '';
    this.descripcion = '';}
  }
  HabilitarBtn() {
    this.disablebtn = this.tarea === '' && this.descripcion === '';
  }
  constructor() { }

  ngOnInit(): void {
  }

}
