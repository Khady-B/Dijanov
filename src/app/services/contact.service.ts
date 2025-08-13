import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private formspreeUrl = 'https://formspree.io/f/movaejrp'; 

  constructor(private http: HttpClient) { }

  sendContactForm(formData: any): Observable<any> {
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // return this.http.post<any>(this.formspreeUrl, formData, { headers });
    return this.http.post<any>(this.formspreeUrl, formData);
  }
}
