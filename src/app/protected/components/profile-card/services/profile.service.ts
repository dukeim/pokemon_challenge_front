import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ProfileResponse } from '../interfaces/ProfileResponse';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private baseUrl : string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getProfile(){
    const url = `${ this.baseUrl }/trainer`;

    return this.http.get<ProfileResponse>(url);
      
  }
}
