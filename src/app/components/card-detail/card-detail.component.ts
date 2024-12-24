import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent {
  @Input() service: any;
  @Output() close = new EventEmitter<void>();

  @ViewChild('modalContent', { static: true }) modalContent!: ElementRef;

  constructor(private router: Router) { }

  goToContact(serviceId: number): void {
    this.router.navigate(['/contact'], { queryParams: { service: serviceId } });
  }
  // private isDragging = false;
  // private initialMouseX = 0;
  // private initialMouseY = 0;
  // private translateX = 0;
  // private translateY = 0;

  // constructor(private renderer: Renderer2) {}

  // ngAfterViewInit() {
  //   const modalElement = this.modalContent.nativeElement;

  //   // Capturer le mousedown pour commencer à déplacer
  //   this.renderer.listen(modalElement, 'mousedown', (event: MouseEvent) => {
  //     this.isDragging = true;

  //     // Position initiale de la souris au clic
  //     this.initialMouseX = event.clientX;
  //     this.initialMouseY = event.clientY;

  //     // Activer l'écoute des mouvements de la souris
  //     this.renderer.listen('window', 'mousemove', (moveEvent: MouseEvent) => this.onMouseMove(moveEvent));

  //     // Arrêter de déplacer au relâchement de la souris
  //     this.renderer.listen('window', 'mouseup', () => this.isDragging = false);
  //   });
  // }

  // onMouseMove(event: MouseEvent) {
  //   if (this.isDragging) {
  //     // Calculer le delta (la distance parcourue par la souris)
  //     const deltaX = event.clientX - this.initialMouseX;
  //     const deltaY = event.clientY - this.initialMouseY;

  //     // Mettre à jour les valeurs de translation
  //     this.translateX += deltaX;
  //     this.translateY += deltaY;

  //     // Appliquer la transformation (déplacement) à la modale
  //     const modalElement = this.modalContent.nativeElement;
  //     modalElement.style.transform = `translate(${this.translateX}px, ${this.translateY}px)`;

  //     // Réinitialiser les coordonnées initiales pour la prochaine itération
  //     this.initialMouseX = event.clientX;
  //     this.initialMouseY = event.clientY;
  //   }
  // }
  
  closeModal() {
    this.close.emit();  // Émet l'événement pour fermer la modale
  }
  
}
