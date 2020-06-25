import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {User} from './user.model';
import {Router} from '@angular/router';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiKey = 'AIzaSyCBqQnZUrC7zd4ipgpXFWxdkkpQvHO36FQ';
  user = new BehaviorSubject<User>(null);

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  signup(email: string, password: string) {
    return this.httpClient.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp',
      {email, password, returnSecureToken: true},
      {params: {key: this.apiKey}}
    ).pipe(catchError(this.handleError), tap(
      responseData => {
        this.handleAuthentication(
          responseData.email,
          responseData.localId,
          responseData.idToken,
          Number(responseData.expiresIn)
        );
      }
    ));
  }

  login(email: string, password: string) {
    return this.httpClient.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword',
      {email, password, returnSecureToken: true},
      {params: {key: this.apiKey}}
    ).pipe(catchError(this.handleError), tap(
      responseData => {
        this.handleAuthentication(
          responseData.email,
          responseData.localId,
          responseData.idToken,
          Number(responseData.expiresIn)
        );
      }
    ));
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
  }

  private handleError(errorResponse: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An unknown error occurred!';
    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(errorMessage);
    }
    switch (errorResponse.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'Email already in use';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This user does not exist';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Incorrect password';
        break;
    }
    return throwError(errorMessage);
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(email, userId, token, expirationDate);
    this.user.next(user);
  }

}
