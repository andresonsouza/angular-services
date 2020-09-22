import { Injectable } from '@angular/core';
import { User } from './user';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  readonly API = environment.dev;

  constructor(private http: HttpClient) { }

  getComments(): Observable<User[]> {
    return this.http.get<User[]>(this.API)
      .pipe(
        tap(
          (res => {
            console.log(res);
          }),
          err => {
            throwError(err);
            return throwError;
          }
        )
      );
  }
}
