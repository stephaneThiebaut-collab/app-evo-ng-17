import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private url: string = `https://get-evolutif.xyz/login1`;
  // private url: string = `http://localhost:3000/login1`;


  getAllTicket(): Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.get<any>(`${this.url}/admin/all-ticket`, { headers })
    .pipe(
      catchError(this.handleError)
    );
  }
  getOneTicketAdmin(id: string): Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.get<any>(`${this.url}/admin/get-one-ticket/${id}`, { headers })
    .pipe(
      catchError(this.handleError)
    );
  }
  getReponseTicketAdmin(id: string): Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.get<any>(`${this.url}/admin/get-reponse-ticket/${id}`, { headers })
    .pipe(
      catchError(this.handleError)
    );
  }

  postReponseTicketAdmin(id: string, message: string): Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.post<any>(`${this.url}/admin/post-reponse-ticket/${id}`, {message}, { headers })
    .pipe(
      catchError(this.handleError)
    );
  }

  getToken(): any{
    if (localStorage.getItem("token")) {
      return localStorage.getItem("token");
    }
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
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
