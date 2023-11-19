import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../../layout/loader/loader.component';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { SubscribeComponent } from '../../layout/subscribe/subscribe.component';
import { ErrorChargementComponent } from '../error-chargement/error-chargement.component';



@Component({
  standalone: true,
  imports: [CommonModule, LoaderComponent, NavbarComponent, FooterComponent, SubscribeComponent, ErrorChargementComponent],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  boolCreationSiteWeb: boolean = true;
  boolClickReforge: boolean = false;
  boolClickReferencementNaturel: boolean = false;
  boolClickAssistanceEtConseil: boolean = false
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  test(value: string) {
    switch (value) {
      case "creatApp":
        this.boolCreationSiteWeb = true;
        this.boolClickReforge = false;
        this.boolClickReferencementNaturel = false;
        this.boolClickAssistanceEtConseil = false;
        break;
      case "reforge":
        this.boolClickReforge = true;
        this.boolCreationSiteWeb = false;
        this.boolClickReferencementNaturel = false;
        this.boolClickAssistanceEtConseil = false;
        break;
      case "SEO":
        this.boolClickReferencementNaturel = true;
        this.boolCreationSiteWeb = false;
        this.boolClickReforge = false;
        this.boolClickAssistanceEtConseil = false;
        break;
      case "assistanceEtConseil":
        this.boolClickAssistanceEtConseil = true;
        this.boolCreationSiteWeb = false;
        this.boolClickReforge = false;
        this.boolClickReferencementNaturel = false;
        break;
      default:
        break;
    }
  }

  constructor(){}
}
