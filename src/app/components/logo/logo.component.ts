import { Component, Renderer2, RendererFactory2 } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent {

  private renderer: Renderer2;

  constructor(public languageService: LanguageService, rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  initializeMouseMovement() {
    let mouseX: number;
    let mouseY: number;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    document.addEventListener('mousemove', (e: MouseEvent) => {
      mouseX = e.pageX;
      mouseY = e.pageY;
      const traX = ((4 * mouseX) / 570) + 40;
      const traY = ((4 * mouseY) / 570) + 50;

      console.log(traX);
      this.renderer.setStyle(document.querySelector('.title'), 'background-position', `${traX}% ${traY}%`);
    });
  }
  
}
