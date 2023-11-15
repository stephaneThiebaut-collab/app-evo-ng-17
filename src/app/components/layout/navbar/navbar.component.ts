import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  ongletConnection: boolean = false;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if (localStorage.getItem('token')) {
      this.ongletConnection = !this.ongletConnection;
    } else {
      this.ongletConnection = this.ongletConnection;
    }
  }

  deconnection(){
    if (localStorage.getItem('token')) {
      localStorage.removeItem("token");
      alert("Vous avez été deconnecter");
      this.router.navigateByUrl('')
    }
  }
  constructor(private router: Router) {}
}
