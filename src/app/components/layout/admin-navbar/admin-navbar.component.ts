import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../../service/admin.service';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  standalone: true,
  imports: [CommonModule, RouterLinkActive],
  templateUrl: './admin-navbar.component.html',
  styleUrl: './admin-navbar.component.scss'
})
export class AdminNavbarComponent {
  ongletConnection: boolean = false;

  ngOnInit(): void {
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
      this.router.navigateByUrl('/');
    }
  }
  constructor(private router: Router) { }
}
