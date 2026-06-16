import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Contact } from '../../../src/pojos/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactMeService {


  constructor(private http:HttpClient) { }
  message!:string;
  url="https://formspree.io/f/mrgvgkab";

  public sendMail(contactClass:Contact): Observable<any>{
    this.message = contactClass.message;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.url,
      { Name: contactClass.fullName, "Sent By": contactClass.emailId, "Email": contactClass.emailId, Message: this.message },
      { 'headers': headers }).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      return throwError('400');
    } else {
      // Server side error
      return throwError('503');
    }
  }

}
