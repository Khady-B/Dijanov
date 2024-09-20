import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';
  selectedFiles: File[] | null = null;

  constructor(private translate: TranslateService, private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      lastName: ['', [Validators.required, Validators.maxLength(255)]],
      firstName: ['', [Validators.required, Validators.maxLength(255)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(255)]],
      tel: [''],
      service: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onFileChange(event: any): void {
    const input = event.target as HTMLInputElement;

    if (event.target.files.length > 0) {
      this.selectedFiles = Array.from(event.target.files);
    }

    if (!input || !input.files) {
      return;
    }

    const preview = document.querySelector('.preview') as HTMLElement;
    if (!preview) return;

    // Supprimer l'affichage précédent
    while (preview.firstChild) {
      preview.removeChild(preview.firstChild);
    }

    const curFiles = input.files;
    if (curFiles.length === 0) {
      const para = document.createElement("p");
      para.textContent = this.translate.instant('Choix_desc');
      preview.appendChild(para);
    } else {
      const list = document.createElement("ol");
      preview.appendChild(list);

      for (let i = 0; i < curFiles.length; i++) {
        const listItem = document.createElement("li");
        const para = document.createElement("p");

        if (this.validFileType(curFiles[i])) {
          para.textContent =
            curFiles[i].name +
            " (" +
            this.returnFileSize(curFiles[i].size) +
            ")";
        } else {
          para.textContent =
            curFiles[i].name +
            ": " + this.translate.instant('Message_invalid');
          
        }
        listItem.appendChild(para);
        list.appendChild(listItem);
      }
    }
  }

  // Valider les types de fichiers autorisés
  validFileType(file: File): boolean {
    const fileTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png"];
    return fileTypes.includes(file.type);
  }

  // Retourner la taille du fichier dans un format lisible
  returnFileSize(size: number): string {
    if (size < 1024) {
      return size + " octets";
    } else if (size >= 1024 && size < 1048576) {
      return (size / 1024).toFixed(1) + " Ko";
    } else {
      return (size / 1048576).toFixed(1) + " Mo";
    }
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = new FormData();
      formData.append('lastName', this.contactForm.value.lastName);
      formData.append('firstName', this.contactForm.value.firstName);
      formData.append('email', this.contactForm.value.email);
      formData.append('tel', this.contactForm.value.tel);
      formData.append('service', this.contactForm.value.service);
      formData.append('message', this.contactForm.value.message);
      if (this.selectedFiles && this.selectedFiles.length > 0) {
        this.selectedFiles.forEach((file: File, index: number) => {
          formData.append('files[]', file); // 'files[]' pour envoyer sous forme de tableau
        });
      }

      // Ajoute le sujet ici
      formData.append('_subject', '[Dijanov] ' + this.contactForm.value.service);

      // Envoie formData au lieu de this.contactForm.value
      this.contactService.sendContactForm(formData).subscribe(
        response => {
          this.successMessage = this.translate.instant('Message_succès');
          this.contactForm.reset();
          this.selectedFiles = null;
        },
        error => {
          this.errorMessage = this.translate.instant('Message_erreur');
        }
      );
    }
  }
}
