import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PorCapitalComponent } from "./pais/pages/por-capital/por-capital.component";
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from "./pais/pages/por-region/por-region.component";
import { VerPaisComponent } from "./pais/pages/ver-pais/ver-pais.component";

const routes: Routes = [
    {
        path: '',
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: PorRegionComponent,                
    },
    {
        path: 'capital',
        component: PorCapitalComponent,
    },
    {
        // Los : se utilizan para que se pueda insertar el id de cualquier país. No hay que escribir : en la url
        path: 'pais/:id',
        component: VerPaisComponent,     
    },
    {
        path: '**',
        // En caso de que queramos mostrar una página de error al usuario
        // component: 404Component,
        redirectTo: '',
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ], 
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{

}