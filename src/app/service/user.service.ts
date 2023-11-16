import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, concatMap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url: string = `https://get-evolutif.xyz/login1`;
  // private url: string = `http://localhost:3000/login1`;
  private loaderSubject = new Subject<boolean>();
  loader$ = this.loaderSubject.asObservable();

  userConnection(email: string, password: string): Observable<any> {
    // this.loaderSubject.next(true);
    return this.http.post<any>(`${this.url}/connection`, { email, password })
      .pipe(
        catchError(this.handleError),
        // concatMap(response => {
        //   this.loaderSubject.next(false);
        //   console.log(response)
        //   return response;
        // })
      );
  }
  userInscription(email: string, password: string, confirmPassword: string, name: string, last_name: string): Observable<any> {
    return this.http.post<any>(`${this.url}/inscription`, { email, password, confirmPassword, name, last_name })
      .pipe(
        catchError(this.handleError)
      );
  }
  // getToken(): any {
  //   if (localStorage.getItem("token")) {
  //     return localStorage.getItem("token");
  //   }
  // }
  AllTicket(): Observable<any> {
    return this.http.get<any>(`${this.url}/ticket/all-devis`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getOneTicket(id: string): Observable<any> {
    return this.http.get<any>(`${this.url}/ticket/one-ticket/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getReponseTicket(id: string): Observable<any> {
    return this.http.get<any>(`${this.url}/ticket/get-response-ticket/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  postReponseTicket(id: string, message: string): Observable<any> {
    return this.http.post<any>(`${this.url}/ticket/reponse-ticket/${id}`, { message })
      .pipe(
        catchError(this.handleError)
      );
  }

  postRendezVousByEmail(name: string, email: string, tel: string, message: string): Observable<any> {
    return this.http.post<any>(`${this.url}/ticket/rdv-by-email`, { name, email, tel, message })
      .pipe(
        catchError(this.handleError)
      );
  }

  postCreateTicket(object_ticket: number, descriptif: string): Observable<any> {
    return this.http.post<any>(`${this.url}/ticket/create-ticket`, { object_ticket, descriptif })
      .pipe(
        catchError(this.handleError)
      );
  }

  passwordForget(email: string): Observable<any> {
    return this.http.post<any>(`${this.url}/password-forget`, { email })
      .pipe(
        catchError(this.handleError)
      )
  }
  newPassword(id: string, password: string): Observable<any> {
    return this.http.put<any>(`${this.url}/new-password/${id}`, { password })
      .pipe(
        catchError(this.handleError)
      );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error(error.error.message));
  }
  constructor(private http: HttpClient) { }
}
