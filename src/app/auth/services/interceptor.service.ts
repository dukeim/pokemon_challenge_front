import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{
  securityContexts:RegExp = /trainer|\/team_manager/;    
  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = localStorage.getItem('token');

    let request = req;
    if(this.urlRequireToken(req.url)){
      if (token) {
        request = req.clone({
          setHeaders: {
            Authorization: `${ token }`
          }
        });
      }
    }
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {

        if (err.status === 401) {
          this.router.navigateByUrl('/auth/login');
        }

        return throwError( err );

      })
    );
  }

  private urlRequireToken(requestUrl:string):boolean{        
    return this.securityContexts.test(requestUrl);
}
  
}
