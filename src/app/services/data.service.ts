// src/app/services/data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private jsonUrl = './assets/datas/services.json';

  constructor(private http: HttpClient) { }

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.jsonUrl);
  }
}
