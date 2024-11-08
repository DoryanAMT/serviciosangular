import { NgModule } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';

//  IMPORTAMOS EL SERVICIO PARA DESPUES RECUPERARLO EN EL COMPONENTE
import { ServiceComics } from './services/service.comics';
import { ServicePersonas } from './services/service.persona';
//  IMPOTAMOS LA LIBRERIA PARA PODER CONSUMIR APIS
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComicComponent } from './components/comic/comic.component';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { FormsModule } from '@angular/forms';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';

@NgModule({
  declarations: [
    AppComponent,
    ComicComponent,
    LibreriaComponent,
    PersonasapiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AppRoutingModule,
    ServiceComics,
    ServicePersonas,
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
