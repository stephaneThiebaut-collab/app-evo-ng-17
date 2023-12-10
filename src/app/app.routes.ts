import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { ContactComponent } from './components/pages/contact/contact.component';



export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'services-details', loadChildren: () => import('./components/pages/service-details/router/router.module').then(m => m.RouterModules) },
    {path: 'espace-client', loadChildren: () => import('./components/pages/espace-client/espace-client-route.module').then(m => m.EspaceClientRoute )},
    {path: 'admin', loadChildren: () => import('./components/pages/admin/admin-router.module').then(m => m.AdminRouterModule)},
    {path: '**', component: ErrorComponent}
];
