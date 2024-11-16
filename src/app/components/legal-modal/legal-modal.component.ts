import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-legal-modal',
  templateUrl: './legal-modal.component.html',
  styleUrls: ['./legal-modal.component.css']
})
export class LegalModalComponent {
  @Input() selectedSection: string | null = null;
  @Output() close = new EventEmitter<void>();

  closeModal(): void {
    this.close.emit();
  }
}
