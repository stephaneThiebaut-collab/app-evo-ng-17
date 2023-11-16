import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = "My-token"

    // if (token) {
    //     request = request.clone({
    //     setHeaders: {
    //         Authorization: `Bearer ${token}`
    //         }
    //     });
    // }
      console.log(request)
    return next.handle(request).pipe(
        catchError((error: any) => {
        if (error instanceof HttpErrorResponse && error.status === 501) {
            this.router.navigateByUrl('/');
        }
        return throwError(() => new Error(error));;
            })
        );
    }
}

