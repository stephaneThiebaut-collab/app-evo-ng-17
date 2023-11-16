// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ConnectionInscriptionComponent } from './connection-inscription/connection-inscription.component';
// import {  HttpClientModule } from '@angular/common/http';
// import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { provideHttpClient } from "@angular/common/http";


import { bootstrapApplication } from '@angular/platform-browser';
import { ConnectionInscriptionComponent } from "./connection-inscription/connection-inscription.component";
// @NgModule({
//   declarations: [
//     ConnectionInscriptionComponent
//   ],
//   imports: [
//     CommonModule,
//     HttpClientModule,
//     ConnectionInscriptionComponent,
//     ReactiveFormsModule,

//   ]
// })
// export class EspaceClientModule { }
bootstrapApplication(ConnectionInscriptionComponent, {providers: [
    provideHttpClient(),
  ]});

