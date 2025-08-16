import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @ViewChild('legalModal', { static: false }) legalModal!: ElementRef;
  isModalOpen = false;
  selectedSection: string | null = null;
  currentYear: number = new Date().getFullYear();

  openLegalModal(section: string): void {
    this.selectedSection = section;
    this.isModalOpen = true;
  }

  closeLegalModal(event?: Event): void {
    this.isModalOpen = false;
    this.selectedSection = null;
    if (event) {
      event.stopPropagation(); // Empêche la propagation du clic à la modale
    }
  }
  // openLegalModal(): void {
  //   this.isModalOpen = true;
  // }

  // closeLegalModal(): void {
  //   this.isModalOpen = false;
  // }
  
}
