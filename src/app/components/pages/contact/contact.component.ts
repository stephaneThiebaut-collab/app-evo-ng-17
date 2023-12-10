import { Component, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { LoaderComponent } from '../../layout/loader/loader.component';
import { SubscribeComponent } from '../../layout/subscribe/subscribe.component';
import { ErrorChargementComponent } from '../error-chargement/error-chargement.component';
import { FooterComponent } from '../../layout/footer/footer.component';


@Component({
  standalone: true,
  imports: [CommonModule, NavbarComponent, LoaderComponent, SubscribeComponent, ErrorChargementComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  documentCompletedLoaded: any = this.document.readyState;
  email: string = 'contact@get-evolutif.xyz';
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.document.title = "Evolutif - contact";
  }
  constructor(@Inject(DOCUMENT) private document: Document){}
}
