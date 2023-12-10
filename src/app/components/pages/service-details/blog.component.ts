import { Component, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { NavbarComponent } from '../../layout/navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { LoaderComponent } from '../../layout/loader/loader.component';
import { ErrorChargementComponent } from '../error-chargement/error-chargement.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterLink, LoaderComponent, ErrorChargementComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  DocumentIsReady: any = this.document.readyState;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.document.title = 'Evolutif - Service details'
  }
  constructor(@Inject(DOCUMENT) private document: Document){}
}
