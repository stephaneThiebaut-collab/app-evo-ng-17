import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { LoaderComponent } from '../../layout/loader/loader.component';
import { RouterLink } from '@angular/router';
import { ErrorChargementComponent } from '../error-chargement/error-chargement.component';

@Component({
  standalone: true,
  imports: [CommonModule, NavbarComponent, LoaderComponent, RouterLink, ErrorChargementComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
