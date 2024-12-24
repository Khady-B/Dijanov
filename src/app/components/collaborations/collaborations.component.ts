import { Component, ElementRef, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-collaborations',
  templateUrl: './collaborations.component.html',
  styleUrls: ['./collaborations.component.css']
})
export class CollaborationsComponent {
  collaborations: any[] = [];

  @ViewChild('card')
  cardRef!: ElementRef;

  constructor(public languageService: LanguageService, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getDataCollaborations().subscribe((response) => {
      this.collaborations = response;
    });
  }

  openLink(url: string): void {
    window.location.href = url;
  }
}
