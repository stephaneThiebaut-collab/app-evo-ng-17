import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { LoaderComponent } from '../../layout/loader/loader.component';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, NavbarComponent, LoaderComponent, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
