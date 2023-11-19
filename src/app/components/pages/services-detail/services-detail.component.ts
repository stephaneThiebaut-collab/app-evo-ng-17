import { Component, Inject, Renderer2 } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { LoaderComponent } from '../../layout/loader/loader.component';
import { RouterLink } from '@angular/router';
import { ErrorChargementComponent } from '../error-chargement/error-chargement.component';
import { FooterComponent } from '../../layout/footer/footer.component';

@Component({
  standalone: true,
  imports: [CommonModule, NavbarComponent, LoaderComponent, RouterLink, ErrorChargementComponent, FooterComponent],
  templateUrl: './services-detail.component.html',
  styleUrl: './services-detail.component.scss'
})
export class ServicesDetailComponent {
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

}

ngAfterContentChecked(): void {
  //Called after every check of the component's or directive's content.
  //Add 'implements AfterContentChecked' to the class.

  try {
    let url = this.document.location.href;
    if (url.includes('#')) {
      let idArticle = url.split('#')[1];
      let el = this.document.getElementById(idArticle);
      if (el) {
        el.scrollIntoView();
      }
    }
  } catch (error) {
    console.log(error)
  }
}
  
  constructor(@Inject(DOCUMENT) private document: Document){}
}
