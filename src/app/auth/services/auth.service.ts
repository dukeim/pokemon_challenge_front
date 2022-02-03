import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl : string = environment.baseUrl;
  private _userName: string;

  constructor(private http: HttpClient) { }

  get userName() { return this._userName; }

  login(username : string, password: string){
    const url = `${ this.baseUrl }/security/login`;
    const body = { username, password };

    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap ( resp => { 
          localStorage.setItem('token', resp.token );
          this._userName = username;
        }),
        map( resp => {
          return "Ok"; 
        }),
        catchError( err => {
          if (err.status == 403){
            return "Invalid credentials";
          }else{
            return "Authentication server error";
          }
          
        })
      );
  }

  
  signup( username: string, email: string, password: string ) {

    const url  = `${ this.baseUrl }/security/signup`;
    const body = { username, email, password };

    return this.http.post<AuthResponse>( url, body )
      .pipe(
        map( resp => "Ok" ),
        catchError( err => "Server error" )
      );

  }
}

