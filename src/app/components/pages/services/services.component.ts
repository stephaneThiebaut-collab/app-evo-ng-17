import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { SubscribeComponent } from '../../layout/subscribe/subscribe.component';
import { LoaderComponent } from '../../layout/loader/loader.component';
import { RouterLink } from '@angular/router';
import { ErrorChargementComponent } from '../error-chargement/error-chargement.component';

@Component({
  standalone: true,
  imports: [CommonModule, NavbarComponent, SubscribeComponent, LoaderComponent, RouterLink, ErrorChargementComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
