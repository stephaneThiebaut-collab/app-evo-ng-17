import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ConnectionInscriptionComponent } from './connection-inscription/connection-inscription.component';


export const routes: Routes = [
    { path: '', component: ConnectionInscriptionComponent },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EspaceClientRoute { }