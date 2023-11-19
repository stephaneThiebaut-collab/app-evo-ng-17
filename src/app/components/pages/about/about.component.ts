import { Component, ElementRef, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { LoaderComponent } from '../../layout/loader/loader.component';
import { RouterLink } from '@angular/router';
import { ErrorChargementComponent } from '../error-chargement/error-chargement.component';
import { FooterComponent } from '../../layout/footer/footer.component';

@Component({
  standalone: true,
  imports: [CommonModule, NavbarComponent, LoaderComponent, RouterLink, ErrorChargementComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
constructor(private elementRef: ElementRef, @Inject(DOCUMENT) private document: Document){}
}
