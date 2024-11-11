import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServicePlantillas } from '../../services/service.plantillas';
import { Plantilla } from '../../models/plantilla';

@Component({
  selector: 'app-plantillafuncionsimple',
  templateUrl: './plantillafuncionsimple.component.html',
  styleUrl: './plantillafuncionsimple.component.css'
})
export class PlantillafuncionsimpleComponent implements OnInit {
  @ViewChild("selectfuncion") selectFuncion!: ElementRef;
  public funciones!: Array<String>;
  public empleados!: Array<Plantilla>;
  constructor(private _service: ServicePlantillas) {
    this.empleados = new Array<Plantilla>
  }

  mostrarPlantilla(): void {
    let funcion = this.selectFuncion.nativeElement.value;
    this._service.getPlantillaFuncion(funcion).subscribe(response => {
      this.empleados = response;
    })
  }

  ngOnInit(): void {
    this._service.getFuncionesPlantilla().subscribe(response => {
      this.funciones = response;
    })
    // .then(response => {
    //   this.funciones = response; 
    // })
  }

}
