import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private translations: any = {
    fr: {
      Français: 'Français',
      Anglais : 'Anglais',
      Accueil : 'Accueil',
      Services : 'Services',
      Collaborations : 'Collaborations',
      À_propos: 'À propos',
      Contact : 'Contact',
      Recherche : 'À la recherche de la solution digitale adaptée à vos besoins ?',
      Aspiration : ' Vous aspirez à donner vie à votre vision numérique?',
      Stop_recherche : 'Ne cherchez plus !',
      Slogan : 'Avec Dijanov, osez l\'innovation numérique sur mesure. Nous transformons vos idées en réalité numérique, répondant ainsi à vos besoins uniques et à vos aspirations les plus audacieuses',
      Voir_plus : 'Voir plus',
      DESCRIPTION: 'Ceci est un exemple.',
      ANOTHER_TITLE: 'Un autre titre',
      ANOTHER_DESCRIPTION: 'Ceci est un autre exemple.'
    },
    en: {
      Français: 'French',
      Anglais : 'English',
      Accueil : 'Home',
      Services : 'Services',
      Collaborations : 'Collaborations',
      À_propos: 'About us',
      Contact : 'Contact',
      Recherche : 'Looking for the digital solution suited to your needs?',
      Aspiration : 'Do you aspire to bring your digital vision to life?',
      Stop_recherche : 'Do not search anymore !',
      Slogan : 'With Dijanov, dare to tailor-made digital innovation. We transform your ideas into digital reality, meeting your unique needs and boldest aspirations.',
      Voir_plus : 'See more',
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
