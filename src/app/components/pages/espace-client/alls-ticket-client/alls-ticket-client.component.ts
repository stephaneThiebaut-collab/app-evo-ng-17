import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../../service/user.service';

import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from '../../../layout/navbar/navbar.component';
import { LoaderComponent } from '../../../layout/loader/loader.component';
import { Ticket } from '../../../../interface/ticket';
import { DirectiveHomeLinkExplicatifHomePage } from '../../../../directive/directive-style.directive';

@Component({
  selector: 'app-alls-ticket-client',
  standalone: true,
  imports: [CommonModule, NavbarComponent, ReactiveFormsModule, HttpClientModule, LoaderComponent, DirectiveHomeLinkExplicatifHomePage],
  providers: [UserService],
  templateUrl: './alls-ticket-client.component.html',
  styleUrl: './alls-ticket-client.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AllsTicketClientComponent {
  loadedCompleted: any = document.readyState;
  ticket!: Array<Ticket>;
  FormIsVisible: boolean = false;
  chooseOption!: Array<{ id: number, title: string }>;
  createTicket = this.fb.group({
    object_ticket: [0, Validators.required],
    descriptif: [null, Validators.required]
  })
  ngOnInit(){
    
    this.chooseOption = this.userService.chooseOption;
    this.userService.AllTicket().subscribe((data) => {
      this.ticket = data
      return this.ticket
    }, err => {
      console.log(err)
    })
  }
  goToTicket(uuid_ticket: string){
    this.router.navigateByUrl(`espace-client/ticket/${uuid_ticket}`)
  }
  toggleForm(){
    this.FormIsVisible = !this.FormIsVisible;
  }
  addValueToForm(event: Event){
    if (event) {
      const selectElement = event.target as HTMLSelectElement;
      const selectedValue = selectElement.value;
      this.createTicket.patchValue({ object_ticket: parseInt(selectedValue) });
    }
  }
  onSubmit(){
    const ticket = {
      object_ticket: this.createTicket.value.object_ticket,
      descriptif: this.createTicket.value.descriptif,
    }

    if (this.createTicket.valid && ticket.object_ticket && ticket.descriptif) {
      this.userService.postCreateTicket(ticket.object_ticket, ticket.descriptif).subscribe((data: any) => {
        alert(data.message);
        window.location.reload();
      }, (error: {message: any}) => {
        alert(error.message)
      })
    }
  }
  constructor(private userService: UserService, private router: Router, private fb: FormBuilder){}
}
