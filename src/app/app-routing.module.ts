import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibreriaComponent } from './components/libreria/libreria.component';
import { ComicComponent } from './components/comic/comic.component';
import { FormsModule } from '@angular/forms';
import { PersonasapiComponent } from './components/personasapi/personasapi.component';

const routes: Routes = [
  {path: "", component: LibreriaComponent},
  {path: "comic", component: ComicComponent},
  {path: "personasapi", component: PersonasapiComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
