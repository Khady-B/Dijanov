import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-legal-modal',
  templateUrl: './legal-modal.component.html',
  styleUrls: ['./legal-modal.component.css']
})
export class LegalModalComponent {
  @Input() selectedSection: string | null = null;
  @Output() close = new EventEmitter<void>();
  @ViewChild('modalContent', { static: true }) modalContent!: ElementRef;

  constructor(private elementRef: ElementRef) {}

  closeModal() {
    this.close.emit();  // Émet l'événement pour fermer la modale
  }

  // @HostListener('document:click', ['$event'])
  // onDocumentClick(event: MouseEvent) {
  //   // Vérifie si l'élément cliqué n'est pas à l'intérieur de la modale et n'est pas un bouton de fermeture
  //   if (this.modalContent && !this.modalContent.nativeElement.contains(event.target) && !(event.target instanceof HTMLButtonElement && event.target.classList.contains('close-modal'))) {
  //     this.closeModal();
  //   }
  // }


}
