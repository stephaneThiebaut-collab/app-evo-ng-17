import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from '../blog.component';
import { OptiSeoComponent } from '../opti-seo/opti-seo.component';
import { ReforgeAppComponent } from '../reforge-app/reforge-app.component';
import { CreationApiComponent } from '../creation-api/creation-api.component';
import { MajEtFonctionnaliteComponent } from '../maj-et-fonctionnalite/maj-et-fonctionnalite.component';
import { CreationDashboardComponent } from '../creation-dashboard/creation-dashboard.component';
import { CreationAppComponent } from '../creation-app/creation-app.component';




export const routes: Routes = [
  {path: '', component: BlogComponent},
  {path: 'seo', component: OptiSeoComponent},
  {path: 'refonte-site-web', component: ReforgeAppComponent},
  {path: 'creation-API-REST-FULL', component: CreationApiComponent},
  {path: 'mise-a-jour-fonctionnalite', component: MajEtFonctionnaliteComponent},
  {path: 'creation-dashboard', component: CreationDashboardComponent},
  {path: 'creation-site-web-app-web', component: CreationAppComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouterModules { }
