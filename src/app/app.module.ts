import { NgModule } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';

//  IMPORTAMOS EL SERVICIO PARA DESPUES RECUPERARLO EN EL COMPONENTE
import { ServiceComics } from './services/service.comics';
import { ServicePersonas } from './services/service.persona';
//  IMPOTAMOS LA LIBRERIA PARA PODER CONSUMIR APIS
import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComicComponent } from './components/comic/comic.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { FormsModule } from '@angular/forms';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';
import { PersonasstandaloneComponent } from './components/personasstandalone/personasstandalone.component';
import { MenuComponent } from './components/menu/menu.component';
import { ServiceCoches } from './services/service.coches';
import { CochesComponent } from './components/coches/coches.component';
import { PlantillafuncionsimpleComponent } from './components/plantillafuncionsimple/plantillafuncionsimple.component';
import { ServicePlantillas } from './services/service.plantillas';
import { PlantillafuncionmultipleComponent } from './components/plantillafuncionmultiple/plantillafuncionmultiple.component';

@NgModule({
  declarations: [
    AppComponent,
    ComicComponent,
    LibreriaComponent,
    PersonasapiComponent,
    MenuComponent,
    CochesComponent,
    PlantillafuncionsimpleComponent,
    PlantillafuncionmultipleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PersonasstandaloneComponent,
  ],
  providers: [
    AppRoutingModule,
    ServiceComics,
    ServicePersonas,
    provideHttpClient(),
    ServiceCoches,
    ServicePlantillas
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
