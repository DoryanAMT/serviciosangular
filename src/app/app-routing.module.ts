import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { CochesComponent } from './components/coches/coches.component';
import { PlantillafuncionsimpleComponent } from './components/plantillafuncionsimple/plantillafuncionsimple.component';
import { PlantillafuncionmultipleComponent } from './components/plantillafuncionmultiple/plantillafuncionmultiple.component';

const routes: Routes = [
  {path: "", component: PersonasapiComponent},
  {path: "libreria", component: LibreriaComponent},
  {path: "coches", component: CochesComponent},
  {path: "funciones", component: PlantillafuncionsimpleComponent},
  {path: "funcionesmultiples", component: PlantillafuncionmultipleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
