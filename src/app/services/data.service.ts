// src/app/services/data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private servicesUrl = 'assets/datas/services.json';
  private collaborationsUrl = 'assets/datas/collaborations.json';
  private articlesUrl = 'assets/datas/articles.json';
  private skillsUrl = 'assets/datas/skills.json';

  constructor(private http: HttpClient) { }

  getDataServices(): Observable<any[]> {
    return this.http.get<any[]>(this.servicesUrl);
  }
  
  getDataCollaborations(): Observable<any[]> {
    return this.http.get<any[]>(this.collaborationsUrl);
  }

  getDataArticles(): Observable<any[]> {
    return this.http.get<any[]>(this.articlesUrl);
  }

  getDataSkills(): Observable<any[]> {
    return this.http.get<any[]>(this.skillsUrl);
  }
}
