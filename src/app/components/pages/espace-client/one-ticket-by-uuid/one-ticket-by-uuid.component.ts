import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../../service/user.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavbarComponent } from '../../../layout/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from '../../../layout/loader/loader.component';
import { DataOneTicket } from '../../../../interface/data-one-ticket';
import { ReponseTicket } from '../../../../interface/reponse-ticket';
import { ErrorChargementComponent } from '../../error-chargement/error-chargement.component';
import { FooterComponent } from '../../../layout/footer/footer.component';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NavbarComponent, HttpClientModule, LoaderComponent, ErrorChargementComponent, FooterComponent],
  providers: [UserService],
  templateUrl: './one-ticket-by-uuid.component.html',
  styleUrl: './one-ticket-by-uuid.component.scss'
})
export class OneTicketByUuidComponent {
  documentLoadedCompleted: DocumentReadyState = document.readyState;
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
      if (typeof window.localStorage !== 'undefined') {
        localStorage.removeItem('token');
        this.router.navigateByUrl('/')
      }
    })
    this.userService.getReponseTicket(this.idTicket).subscribe(data => {
      this.dataReponse = data;
      this.nbrReponse = data.length;
    }, error => {
      if (typeof window.localStorage !== 'undefined') {
        localStorage.removeItem('token');
        this.router.navigateByUrl('/')
      }
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

constructor(private userService: UserService, private fb: FormBuilder, private router: Router){}
}
