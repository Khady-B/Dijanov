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

  width: number = 0;
  height: number = 0;
  mouseX: number = 0;
  mouseY: number = 0;
  mouseLeaveDelay: any = null;

  dataImage: string = ''; // Assurez-vous de fournir une valeur pour cette propriété

  get mousePX(): number {
    return this.mouseX / this.width;
  }

  get mousePY(): number {
    return this.mouseY / this.height;
  }

  get cardStyle(): any {
    const rX = this.mousePX * 30;
    const rY = this.mousePY * -30;
    return {
      transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
    };
  }

  get cardBgTransform(): any {
    const tX = this.mousePX * -40;
    const tY = this.mousePY * -40;
    return {
      transform: `translateX(${tX}px) translateY(${tY}px)`
    }
  }

  get cardBgImage(): any {
    return {
      'background-image': `url(${this.dataImage})`
    }
  }

  handleMouseMove(e: MouseEvent): void {
    this.mouseX = e.pageX - this.cardRef.nativeElement.offsetLeft - this.width / 2;
    this.mouseY = e.pageY - this.cardRef.nativeElement.offsetTop - this.height / 2;
  }

  handleMouseEnter(): void {
    clearTimeout(this.mouseLeaveDelay);
  }

  handleMouseLeave(): void {
    this.mouseLeaveDelay = setTimeout(() => {
      this.mouseX = 0;
      this.mouseY = 0;
    }, 1000);
  }

  ngAfterViewInit(): void {
    this.width = this.cardRef.nativeElement.offsetWidth;
    this.height = this.cardRef.nativeElement.offsetHeight;
  }

  openLink(url: string): void {
    window.location.href = url;
  }
}
