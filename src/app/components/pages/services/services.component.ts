import { Component, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { SubscribeComponent } from '../../layout/subscribe/subscribe.component';
import { LoaderComponent } from '../../layout/loader/loader.component';
import { NavigationExtras, RouterLink } from '@angular/router';
import { ErrorChargementComponent } from '../error-chargement/error-chargement.component';
import { Router } from '@angular/router';
import { FooterComponent } from '../../layout/footer/footer.component';

@Component({
  standalone: true,
  imports: [CommonModule, NavbarComponent, SubscribeComponent, LoaderComponent, ErrorChargementComponent, FooterComponent, RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  viewScroller: any;
  DocumentIsReady: any = this.document.readyState;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.document.title = 'Evolutif - services';
  }
  constructor(@Inject(DOCUMENT) private document: Document){}
} 
