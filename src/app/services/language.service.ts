import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private translations: any = {
    fr: {
      TITLE: 'Bonjour',
      Accueil : 'Accueil',
      Services : 'Services',
      Collaborations : 'Collaborations',
      À_propos: 'À propos',
      Contact : 'Contact',
      DESCRIPTION: 'Ceci est un exemple.',
      ANOTHER_TITLE: 'Un autre titre',
      ANOTHER_DESCRIPTION: 'Ceci est un autre exemple.'
    },
    en: {
      TITLE: 'Hello',
      Accueil : 'Home',
      Services : 'Services',
      Collaborations : 'Collaborations',
      À_propos: 'About us',
      Contact : 'Contact',
      DESCRIPTION: 'This is an example.',
      ANOTHER_TITLE: 'Another Title',
      ANOTHER_DESCRIPTION: 'This is another example.'
    },
  };

  private currentLanguage: string = 'fr';

  
  switchLanguage(language: string) {
    this.currentLanguage = language;
  }

  translate(key: string): string {
    return this.translations[this.currentLanguage][key] || key;
  }

  getCurrentLanguage(): string {
    return this.currentLanguage;
  }
}
