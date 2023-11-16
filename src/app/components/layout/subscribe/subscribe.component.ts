import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-subscribe',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './subscribe.component.html',
  styleUrl: './subscribe.component.scss'
})
export class SubscribeComponent {
  sendEmail = this.fb.group({
    name: [null, Validators.required],
    email: [null, Validators.email],
    phone_number: [null],
    // option: ['', Validators.required],
    message: [null, Validators.required]
  })


  // chooseOption!: Array<{ id: number, title: string }>;

  ngOnInit(): void {
    // this.chooseOption = this.RUS.chooseOption;
  }
  // test(event: Event | undefined){
  //   if (event) {
  //     const selectElement = event.target as HTMLSelectElement;
  //     const selectedValue = selectElement.value;
  //     this.sendEmail.patchValue({ option: selectedValue });
  //   }
  // }
  onSubmit(){

    const emailRdv = {
      name: this.sendEmail.value.name,
      email: this.sendEmail.value.email,
      tel: this.sendEmail.value.phone_number,
      message: this.sendEmail.value.message
    }

    if (this.sendEmail.valid && emailRdv.name && emailRdv.email && emailRdv.tel && emailRdv.message) {
      // this.RUS.postRendezVousByEmail(emailRdv.name, emailRdv.email, emailRdv.tel, emailRdv.message).subscribe((data: { message: any; }) => {
      //   alert(data.message)
      // }, (error: { message: any; }) => {
      //   alert(error.message)
      // })
    }
  }
  constructor(private fb: FormBuilder){}
}
