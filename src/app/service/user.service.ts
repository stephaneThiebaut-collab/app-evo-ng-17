import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, concatMap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url: string = `https://get-evolutif.xyz/login1`;
  // private url: string = `http://localhost:3000/login1`;

  userConnection(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.url}/connection`, { email, password })
      .pipe(
        catchError(this.handleError),
      );
  }
  userInscription(email: string, password: string, confirmPassword: string, name: string, last_name: string): Observable<any> {
    return this.http.post<any>(`${this.url}/inscription`, { email, password, confirmPassword, name, last_name })
      .pipe(
        catchError(this.handleError)
      );
  }
  AllTicket(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.get<any>(`${this.url}/ticket/all-devis`, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  getOneTicket(id: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    console.log(localStorage.getItem('token'))
    return this.http.get<any>(`${this.url}/ticket/one-ticket/${id}`,  {headers} )
      .pipe(
        catchError(this.handleError)
      );
  }

  getReponseTicket(id: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.get<any>(`${this.url}/ticket/get-response-ticket/${id}`, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  postReponseTicket(id: string, message: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.post<any>(`${this.url}/ticket/reponse-ticket/${id}`, { message }, {headers})
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
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.post<any>(`${this.url}/ticket/create-ticket`, { object_ticket, descriptif }, { headers })
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
  chooseOption: Array<{ id: number, title: string }> = [
    { id: 1, title: 'Creation de site web' },
    { id: 2, title: 'Creation d\'application web' },
    { id: 3, title: 'Mise a jour de site web' },
    { id: 4, title: 'Mise a jour d\'application web' },
    { id: 5, title: 'Creation d\'api' },
    { id: 6, title: 'Mise a jour d\'api' },
    { id: 7, title: 'Reforge de site web' },
    { id: 8, title: 'Reforge d\'application web' },
    { id: 9, title: 'Reforge d\'api' },
    { id: 10, title: 'Optimisation web (SEO)' },
    { id: 11, title: 'Je ne sais pas encore' },
    {id: 12, title: 'Ajout de fonctionnalité'}
  ];
  constructor(private http: HttpClient) { }
}
