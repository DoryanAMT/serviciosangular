import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable()
export class ServicePersonas {
    //  PARA LAS PETICIONES API VIENE UN OBJETO LLAMADO
    //  HttpClient QUE NOS PERMITIRA REALIZAR LA PETICIONES
    constructor(
        private _http: HttpClient
    ) { }

    getPersonas(): Observable<any> {
        let urlApiPersonas = "https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas";
        //  TENEMOS DOS FORMAS DE REALIZAR LA FUNCIONALIDAD DE DEVOLUCION DE
        //  DATOS
        //  1)IGUAL QUE EN VUE, CREANDO UNA PROMESA POR ENCIMA DE ESTE METODO
        //  2)DEVOLVER DIRECTAMENTE LA PETICION PARA QUE SEA EL COMPONENTE
        //  QUIEN SE SUSCRIBA(PROMESA)
        return this._http.get(urlApiPersonas);
    }
    getPersonasPromesa(): Promise<any> {
        let request = "api/personas";
        let url = environment.urlApiPersonas + request;
        let promise = new Promise((resolve) => {
            this._http.get(url).subscribe((response) => {
                resolve(response);
            })
        })
        return promise;
    }
}