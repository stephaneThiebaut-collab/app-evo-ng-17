import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { SubscribeComponent } from '../../layout/subscribe/subscribe.component';
import { LoaderComponent } from '../../layout/loader/loader.component';
import { NavigationExtras } from '@angular/router';
import { ErrorChargementComponent } from '../error-chargement/error-chargement.component';
import { Router } from '@angular/router';
import { FooterComponent } from '../../layout/footer/footer.component';

@Component({
  standalone: true,
  imports: [CommonModule, NavbarComponent, SubscribeComponent, LoaderComponent, ErrorChargementComponent, FooterComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  viewScroller: any;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  readMoreInfo(service: string){
    const navigationExtras: NavigationExtras = {
      fragment: service,
    };
    
    this.router.navigate(['services-details'], navigationExtras)
  }
  constructor(private router: Router){}
}
