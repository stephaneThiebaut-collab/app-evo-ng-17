import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { LoaderComponent } from '../../layout/loader/loader.component';
import { SubscribeComponent } from '../../layout/subscribe/subscribe.component';
import { ErrorChargementComponent } from '../error-chargement/error-chargement.component';


@Component({
  standalone: true,
  imports: [CommonModule, NavbarComponent, LoaderComponent, SubscribeComponent, ErrorChargementComponent ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  documentCompletedLoaded: any = document.readyState;
  email: string = 'contact@get-evolutif.xyz';
}
