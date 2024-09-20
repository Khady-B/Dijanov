import { Component, HostListener, Renderer2, RendererFactory2 } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  
  private traX: number | undefined;
  private traY: number | undefined;

  constructor(public languageService: LanguageService, private renderer: Renderer2) {}

  ngOnInit(): void {
    // Initial setup if needed
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const mouseX = event.pageX;
    const mouseY = event.pageY;
    const ww = window.innerWidth;
    const wh = window.innerHeight;

    this.traX = ((4 * mouseX) / 570) + 40;
    this.traY = ((4 * mouseY) / 570) + 50;

    console.log(this.traX);

    this.updateBackgroundPosition();
  }

  private updateBackgroundPosition(): void {
    const titleElement = document.querySelector('.title') as HTMLElement;
    if (titleElement) {
      this.renderer.setStyle(titleElement, 'background-position', `${this.traX}% ${this.traY}%`);
    }
  }
}
