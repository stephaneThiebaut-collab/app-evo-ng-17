import { Component, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { NavbarComponent } from '../../../layout/navbar/navbar.component';
import { FooterComponent } from '../../../layout/footer/footer.component';
import { LoaderComponent } from '../../../layout/loader/loader.component';
import { ErrorChargementComponent } from '../../error-chargement/error-chargement.component';

@Component({
  selector: 'app-creation-app',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, LoaderComponent, ErrorChargementComponent],
  templateUrl: './creation-app.component.html',
  styleUrl: './creation-app.component.scss'
})
export class CreationAppComponent {
  DocumentIsReady: any = this.document.readyState;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.document.title = "Evolutif - Création de site web - Application web";
  }
  constructor(@Inject(DOCUMENT) private document: Document){}
}
