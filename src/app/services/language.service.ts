import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  
  //private currentLanguage: string = 'fr';

  constructor(private translate: TranslateService) {
    const savedLanguage = localStorage.getItem('language') || 'en';
    this.translate.setDefaultLang(savedLanguage);
    this.translate.use(savedLanguage);
  }

  switchLanguage(language: string) {
    this.translate.use(language);
    localStorage.setItem('language', language);
  }

  get currentLanguage(): string {
    return this.translate.currentLang;
  }

  /*
  private apiKey: string = 'YOUR_GOOGLE_API_KEY';
  private apiUrl: string = 'https://translation.googleapis.com/language/translate/v2';

  constructor(private http: HttpClient) { }

  translateText(text: string, targetLang: string, sourceLang: string = 'fr'): Observable<any> {
    let params = new HttpParams()
      .set('q', text)
      .set('target', targetLang)
      .set('source', sourceLang)
      .set('key', this.apiKey);

    return this.http.get(this.apiUrl, { params });
  }

  auto_translate(textToTranslate : string) {
    this.translateText(textToTranslate, this.currentLanguage).subscribe(
      response => {
        this.translations = response.data.translations[0].translatedText;
      },
      error => {
        console.error('Translation error:', error);
      }
    );
  }
  */

  /*
  switchLanguage(language: string) {
    this.currentLanguage = language;
  }

  translate(key: string): string {
    return this.translations[this.currentLanguage][key] || key;
  }

  getCurrentLanguage(): string {
    return this.currentLanguage;
  }
  */
}
