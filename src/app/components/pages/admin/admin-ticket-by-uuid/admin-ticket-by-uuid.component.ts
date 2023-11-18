import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../../../layout/loader/loader.component';
import { AdminService } from '../../../../service/admin.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminNavbarComponent } from '../../../layout/admin-navbar/admin-navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminOneTicket } from '../../../../interface/admin-one-ticket';
import { AdminMessageReponse } from '../../../../interface/admin-message-reponse';

@Component({
  standalone: true,
  imports: [CommonModule, LoaderComponent, AdminNavbarComponent, HttpClientModule, ReactiveFormsModule],
  providers: [AdminService],
  templateUrl: './admin-ticket-by-uuid.component.html',
  styleUrl: './admin-ticket-by-uuid.component.scss'
})
export class AdminTicketByUuidComponent {
  documentLoadedCompleted: DocumentReadyState = document.readyState;
  dataTicket!:  Array<AdminOneTicket>;
  dataReponse: Array<AdminMessageReponse> = [];
  object_service!: string;
  descriptif!: string;
  nbrReponse!: number;
  idTicket: string = document.location.href.split('/')[5];
  sendMessageTicket = this.fb.group({
    message: [null, Validators.required],
  });
  ngOnInit(){
    //const idTicket = document.location.href.split('/')[5];
    this.RAS.getOneTicketAdmin(this.idTicket).subscribe( data => {
      this.dataTicket = data;
      this.object_service = data.map((obj: { object_service: any; }) => { return obj.object_service });
      this.descriptif = data.map((obj: { descriptif: any; }) => { return obj.descriptif });
    }, error => {
      alert(error)
    })
    this.RAS.getReponseTicketAdmin(this.idTicket).subscribe(data => {
      this.dataReponse = data;
      console.log(this.dataReponse)
      this.nbrReponse = data.length;
    }, error => {
      alert(error.message)
    })
  }
  submitMessageTicket(){
    if (this.sendMessageTicket.valid && this.sendMessageTicket.value.message != null) {
    const message = this.sendMessageTicket.value.message
    this.RAS.postReponseTicketAdmin(this.idTicket, message).subscribe(data => {
      this.dataReponse.push(data);
      this.nbrReponse += 1;
      this.sendMessageTicket.reset();
    }, err => {
      console.log(err)
    })
    }
  }

constructor(private RAS: AdminService, private fb: FormBuilder){}
}
