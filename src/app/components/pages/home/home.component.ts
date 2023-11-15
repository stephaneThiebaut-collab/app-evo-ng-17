import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../../layout/loader/loader.component';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { DirectiveHomeLinkExplicatifHomePage } from '../../../directive/directive-style.directive';
import { SubscribeComponent } from '../../layout/subscribe/subscribe.component';
import { RouterLink } from '@angular/router';


@Component({
  standalone: true,
  imports: [CommonModule, LoaderComponent, NavbarComponent, FooterComponent, DirectiveHomeLinkExplicatifHomePage, SubscribeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
