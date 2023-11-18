import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ConnectionInscriptionComponent } from './connection-inscription/connection-inscription.component';

import { AllsTicketClientComponent } from './alls-ticket-client/alls-ticket-client.component';
import { OneTicketByUuidComponent } from './one-ticket-by-uuid/one-ticket-by-uuid.component';


export const routes: Routes = [
    { path: '', component: ConnectionInscriptionComponent },
    { path: 'ticket', component:  AllsTicketClientComponent},
    { path: 'ticket/:id', component: OneTicketByUuidComponent }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EspaceClientRoute { }