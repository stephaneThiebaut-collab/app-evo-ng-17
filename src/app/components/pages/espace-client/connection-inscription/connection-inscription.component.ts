import { Component, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../../service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from '../../../layout/loader/loader.component';
import { NavbarComponent } from '../../../layout/navbar/navbar.component';


@Injectable()
@Component({
  selector: 'app-connection-inscription',
  standalone: true,
  providers: [UserService],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, LoaderComponent, NavbarComponent],
  templateUrl: './connection-inscription.component.html',
  styleUrl: './connection-inscription.component.scss'
})
export class ConnectionInscriptionComponent {
  isLoading: boolean = false;
  seeInscription: boolean = false;
  seeConnection: boolean = true;

  inscriptionUser = this.fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required],
    confirm_password: [null, Validators.required],
    name: [null, Validators.required],
    last_name: [null, Validators.required]
  });

  connectionUser = this.fb.group({
    email: [null, Validators.required],
    password: [null, Validators.required]
  })

  inscriptionSubmit(){
    this.isLoading = true;
    const user = {
      email: this.inscriptionUser.value.email,
      password: this.inscriptionUser.value.password,
      confirm_password: this.inscriptionUser.value.confirm_password,
      name: this.inscriptionUser.value.name,
      last_name: this.inscriptionUser.value.last_name
    }
    if (this.inscriptionUser.valid && user.email != null && user.password != null && user.confirm_password!= null && user.name != null && user.last_name != null) {
      
      this.userService.userInscription(user.email, user.password, user.confirm_password, user.name, user.last_name).subscribe((data: { message: any; }) => {
        if (data.message) {
          this.isLoading = false
        }
        alert(data.message)
      }, (error: { message: any; }) => {
        this.isLoading = false
        alert(error.message)
      })
    }
  }

  connectionSubmit(){
    this.isLoading = true;
    const user = {
      email: this.connectionUser.value.email,
      password: this.connectionUser.value.password,
    }
    if (this.connectionUser.valid && user.email != null && user.password != null) {
      this.userService.userConnection(user.email, user.password).subscribe((data: { message: any; token: string; admin: boolean;}) => {

        alert(data.message);
        if (data.message) {
          this.isLoading = false
        }

      }, (err: { message: any; }) => {
        this.isLoading = false
        alert(err.message)
      })
    }
  }
  ngOnInit(){
    // if (localStorage.getItem('token')) {
    //   this.router.navigateByUrl('profil/page-profil');
    // }
  }
  passwordForget(){
    this.router.navigateByUrl('profil/password-forget')
  }
  affichageConnection(){
    this.seeInscription = !this.seeInscription;
    this.seeConnection = !this.seeConnection;
  }
  affichageInscription(){
    this.seeInscription = !this.seeInscription;
    this.seeConnection = !this.seeConnection;
  }
  constructor(private fb: FormBuilder, private router: Router, private userService: UserService){}
}
