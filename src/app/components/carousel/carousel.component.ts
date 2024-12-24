import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  collaborations: any[] = [];
  collaboration1: any;
  collaboration2: any;
  collaboration3: any;
  
  constructor(public languageService: LanguageService, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getDataCollaborations().subscribe((response) => {
      this.collaboration1 = response[1];
      this.collaboration2 = response[2];
      this.collaboration3 = response[3];
      this.collaborations = response.filter(x => x != response[0]);
      // this.collaborations = response.filter(x => x != response[0]);
      
    });
  }
}
