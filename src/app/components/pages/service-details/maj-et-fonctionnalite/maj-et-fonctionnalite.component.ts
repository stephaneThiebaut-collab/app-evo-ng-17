import { Component, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { NavbarComponent } from '../../../layout/navbar/navbar.component';
import { FooterComponent } from '../../../layout/footer/footer.component';
import { LoaderComponent } from '../../../layout/loader/loader.component';
import { ErrorChargementComponent } from '../../error-chargement/error-chargement.component';

@Component({
  selector: 'app-maj-et-fonctionnalite',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, LoaderComponent, ErrorChargementComponent],
  templateUrl: './maj-et-fonctionnalite.component.html',
  styleUrl: './maj-et-fonctionnalite.component.scss'
})
export class MajEtFonctionnaliteComponent {
  DocumentIsReady: any = this.document.readyState;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.document.title = "Evolutif - Mises à Jour et Nouvelles Fonctionnalités"
  }
  constructor(@Inject(DOCUMENT) private document: Document){}
}
