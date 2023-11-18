import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageTicketComponent } from './admin-page-ticket/admin-page-ticket.component';
import { AdminTicketByUuidComponent } from './admin-ticket-by-uuid/admin-ticket-by-uuid.component';


export const routes: Routes = [
  {path:'admin-all-ticket', component: AdminPageTicketComponent},
  { path: 'admin-one-ticket/:id', component: AdminTicketByUuidComponent }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRouterModule { }
