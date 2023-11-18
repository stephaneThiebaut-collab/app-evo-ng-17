import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../../service/user.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavbarComponent } from '../../../layout/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from '../../../layout/loader/loader.component';
import { DataOneTicket } from '../../../../interface/data-one-ticket';
import { ReponseTicket } from '../../../../interface/reponse-ticket';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NavbarComponent, HttpClientModule, LoaderComponent],
  providers: [UserService],
  templateUrl: './one-ticket-by-uuid.component.html',
  styleUrl: './one-ticket-by-uuid.component.scss'
})
export class OneTicketByUuidComponent {
  documentLoadedCompleted: any = document.readyState;
  dataTicket!: Array<DataOneTicket>;
  dataReponse: Array<ReponseTicket> = [];
  object_service!: string;
  descriptif!: string;
  nbrReponse!: number;
  idTicket: string = document.location.href.split('/')[5];
  sendMessageTicket = this.fb.group({
    message: [null, Validators.required],
  });
  ngOnInit(){
    //const idTicket = document.location.href.split('/')[5];
    this.userService.getOneTicket(this.idTicket).subscribe(data => {
      this.dataTicket = data;
      this.object_service = data.map((obj: { object_service: any; }) => { return obj.object_service });
      this.descriptif = data.map((obj: { descriptif: any; }) => { return obj.descriptif });
    }, error => {
      alert(error.message)
    })
    this.userService.getReponseTicket(this.idTicket).subscribe(data => {
      this.dataReponse = data;
      this.nbrReponse = data.length;
    }, error => {
      alert(error.message)
    })
  }
  submitMessageTicket(){
    if (this.sendMessageTicket.valid && this.sendMessageTicket.value.message != null) {
    const message = this.sendMessageTicket.value.message
    this.userService.postReponseTicket(this.idTicket, message).subscribe(data => {
      this.dataReponse.push(data);
      this.nbrReponse += 1;
      this.sendMessageTicket.reset();
    }, err => {
      alert(err.message)
    })
    }
  }

constructor(private userService: UserService, private fb: FormBuilder){}
}
