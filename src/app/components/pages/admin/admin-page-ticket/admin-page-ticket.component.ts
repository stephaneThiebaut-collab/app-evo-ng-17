import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../../../service/admin.service';
import { Router } from '@angular/router';
import { LoaderComponent } from '../../../layout/loader/loader.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminAllTicket } from '../../../../interface/admin-all-ticket';
import { AdminNavbarComponent } from '../../../layout/admin-navbar/admin-navbar.component';

@Component({
  standalone: true,
  imports: [CommonModule, LoaderComponent, HttpClientModule, AdminNavbarComponent],
  providers: [AdminService],
  templateUrl: './admin-page-ticket.component.html',
  styleUrl: './admin-page-ticket.component.scss'
})
export class AdminPageTicketComponent {
  documentLoadedCompleted: DocumentReadyState = document.readyState;
  ticket!: Array<AdminAllTicket>
  ngOnInit(){
    this.adminService.getAllTicket().subscribe(data => {
      this.ticket = data;
      console.log(this.ticket)
    }, error => {
      alert(error.message)
      this.router.navigateByUrl('/espace-client');
    })
  } 

  goToTicket(uuid_ticket: string){
    this.router.navigateByUrl(`admin/admin-one-ticket/${uuid_ticket}`)
  }
  constructor(private adminService: AdminService, private router: Router){}
}
