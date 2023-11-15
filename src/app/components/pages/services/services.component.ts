import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { SubscribeComponent } from '../../layout/subscribe/subscribe.component';
import { LoaderComponent } from '../../layout/loader/loader.component';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, NavbarComponent, SubscribeComponent, LoaderComponent, RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
