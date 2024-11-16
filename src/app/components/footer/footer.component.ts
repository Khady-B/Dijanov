import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  isModalOpen = false;

  selectedSection: string | null = null;

  openLegalModal(section: string): void {
    this.selectedSection = section;
    this.isModalOpen = true;
  }

  closeLegalModal(): void {
    this.isModalOpen = false;
    this.selectedSection = null;
  }
  // openLegalModal(): void {
  //   this.isModalOpen = true;
  // }

  // closeLegalModal(): void {
  //   this.isModalOpen = false;
  // }
}
