import { Component, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FooterComponent } from '../../../layout/footer/footer.component';
import { NavbarComponent } from '../../../layout/navbar/navbar.component';
import { LoaderComponent } from '../../../layout/loader/loader.component';
import { ErrorChargementComponent } from '../../error-chargement/error-chargement.component';

@Component({
  selector: 'app-reforge-app',
  standalone: true,
  imports: [CommonModule, FooterComponent, NavbarComponent, LoaderComponent, ErrorChargementComponent],
  templateUrl: './reforge-app.component.html',
  styleUrl: './reforge-app.component.scss'
})
export class ReforgeAppComponent {
  DocumentIsReady: any = this.document.readyState;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.document.title = "Evolutif - Reforger Votre Site Web";
  }
  constructor(@Inject(DOCUMENT) private document: Document){}
}
