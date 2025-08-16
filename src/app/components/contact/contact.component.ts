import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ContactService } from 'src/app/services/contact.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';
  // selectedFiles: File[] | null = null;
  services: any[] = [];
  service: string = '';
  mailtoLink: string = 'mailto:contact@dijanov.com';


  constructor(private route: ActivatedRoute, private translate: TranslateService, private fb: FormBuilder, private contactService: ContactService, private serviceService: DataService) {
    this.contactForm = this.fb.group({
      lastName: ['', [Validators.required, Validators.maxLength(255)]],
      firstName: ['', [Validators.required, Validators.maxLength(255)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(255)]],
      tel: [''],
      service: ['', Validators.required],
      message: ['', Validators.required],
      // file: null
    });
  }

  ngOnInit(): void {
      this.serviceService.getDataServices().subscribe((services: any[]) => {
          this.services = services;
          this.service = this.contactForm.getRawValue().service ? this.translate.instant(this.services.find(s => s.id === Number(this.contactForm.getRawValue().service)).title) : '';
          this.updateMailtoLink(this.service);
      });
      this.route.queryParams.subscribe((params) => {
          const selectedService = params['service'];
          if (selectedService) {
              this.contactForm.patchValue({ service: selectedService });
          }
      });
  }

  ngOnChanges(): void {
    this.service = this.contactForm.getRawValue().service ? this.translate.instant(this.services.find(s => s.id === Number(this.contactForm.getRawValue().service)).title) : '';
    this.updateMailtoLink(this.service);      
  }

  updateMailtoLink(serviceName:string): void {
    const subject = serviceName != '' ? serviceName : 'Contact';
    this.mailtoLink = `mailto:contact@dijanov.com?subject=${encodeURIComponent(subject)}`;
  }

  onServiceChange(event: any): void {
    this.ngOnChanges();
  }

  
  // onFileChange(event: any): void {
  //   const input = event.target as HTMLInputElement;
  //   if (!input || !input.files) {
  //     return;
  //   }
  //   const files = Array.from(input.files);
  //   if (files.length > 0) {
  //     this.selectedFiles = files.filter(file => this.validFileType(file));
  //   } else {
  //     this.selectedFiles = null;
  //   }
  //   this.updatePreview(input.files);
  // }

  // updatePreview(files: FileList): void {
  //   const preview = document.querySelector('.preview') as HTMLElement;
  //   if (!preview) return;

  //   // Supprimer l'affichage précédent
  //   while (preview.firstChild) {
  //     preview.removeChild(preview.firstChild);
  //   }

  //   if (files.length === 0) {
  //     const para = document.createElement("p");
  //     para.textContent = this.translate.instant('Choix_desc');
  //     preview.appendChild(para);
  //   } else {
  //     const list = document.createElement("ol");
  //     preview.appendChild(list);

  //     Array.from(files).forEach((file) => {
  //       const listItem = document.createElement("li");
  //         listItem.style.display = "flex";
  //         listItem.style.alignItems = "center";
  //         listItem.style.justifyContent = "space-between";
  //       const para = document.createElement("p");
  //         const removeButton = document.createElement("button");
  //         removeButton.id = "remove";
  //         removeButton.textContent = "✖";
  //         removeButton.style.border = "none";
  //         removeButton.style.background = "none";
  //         removeButton.style.cursor = "pointer";
  //         removeButton.style.color = "black";
  //         removeButton.style.marginLeft = "10px";

  //         removeButton.addEventListener("click", () => this.removeFile(file));

  //       if (this.validFileType(file)) {
  //         para.textContent = `${file.title} (${this.returnFileSize(file.size)})`;
  //       } else {
  //         para.textContent = `${file.title}: ${this.translate.instant('Message_invalid')}`;
  //       }

  //       listItem.appendChild(para);
  //         listItem.appendChild(removeButton);
  //       list.appendChild(listItem);
  //     });
  //   }
  // }

  // validFileType(file: File): boolean {
  //   const fileTypes = [
  //     "application/pdf", 
  //     "application/msword", 
  //     "application/vnd.openxmlformats-officedocument.wordprocessingml.document", 
  //     "image/jpeg", 
  //     "image/png"
  //   ];
  //   return fileTypes.includes(file.type);
  // }


  // // Retourner la taille du fichier dans un format lisible
  // returnFileSize(size: number): string {
  //   if (size < 1024) {
  //     return size + " octets";
  //   } else if (size >= 1024 && size < 1048576) {
  //     return (size / 1024).toFixed(1) + " Ko";
  //   } else {
  //     return (size / 1048576).toFixed(1) + " Mo";
  //   }
  // }

  // saveFiles(): void {
  //   if (this.selectedFiles) {
  //     this.selectedFiles.forEach((file) => {
  //       const reader = new FileReader();
  //       reader.onload = (event: ProgressEvent<FileReader>) => {
  //         const result = event.target?.result;
  //         if (result) {
  //           localStorage.setItem(file.title, result.toString());
  //           console.log(`Fichier ${file.title} enregistré localement.`);
  //         }
  //       };
  //       reader.readAsDataURL(file); // Stocke le fichier encodé en Base64
  //     });
  //     alert('Les fichiers ont été enregistrés localement.');
  //     this.selectedFiles = null; // Réinitialise la sélection
  //   }
  // }

  // removeFile(file: File): void {
  //   if (this.selectedFiles) {
  //     this.selectedFiles = this.selectedFiles.filter((f) => f !== file);
  //   }
  // }

  onSubmit(): void {
    /*if (this.contactForm.valid) {
      const formData = new FormData();
      formData.append('lastName', this.contactForm.value.lastName);
      formData.append('firstName', this.contactForm.value.firstName);
      formData.append('email', this.contactForm.value.email);
      formData.append('tel', this.contactForm.value.tel || ''); // Champs optionnel
      formData.append('service', this.service);
      formData.append('message', this.contactForm.value.message);

      if (this.selectedFiles && this.selectedFiles.length > 0) {
        this.selectedFiles.forEach((file: File, index: number) => {
          formData.append('files[]', file); // Tableau de fichiers
        });
      }*/
      const formData = {
        lastName: this.contactForm.value.lastName,
        firstName: this.contactForm.value.firstName,
        email: this.contactForm.value.email,
        tel: this.contactForm.value.tel || '', // Champ optionnel
        service: this.service,
        message: this.contactForm.value.message,
        subject: '[Dijanov] ' + this.service
        // _subject: '[Dijanov] ' + this.services.find(s => s.id === Number(this.contactForm.value.service)).title
        // files: [] as File[], // Tableau de fichiers
      };

      //formData.append('subject', '[Dijanov] ' + this.contactForm.value.service);

    // const formData = new FormData();
    
    // Ajout des données de formulaire
    // formData.append('lastName', this.contactForm.value.lastName);
    // formData.append('firstName', this.contactForm.value.firstName);
    // formData.append('email', this.contactForm.value.email);
    // formData.append('tel', this.contactForm.value.tel || ''); // Champ optionnel
    // formData.append('service', this.contactForm.value.service);
    // formData.append('message', this.contactForm.value.message);
    // formData.append('subject', '[Dijanov] ' + this.service); // Ajout du sujet ici
    
    // Ajout des fichiers s'ils existent
    // if (this.selectedFiles && this.selectedFiles.length > 0) {
    //   this.selectedFiles.forEach((file: File) => {
    //     formData.append('files[]', file); // Ajout chaque fichier individuellement
    //   });
    // }

    // Envoi du formulaire via le service
    this.contactService.sendContactForm(formData).subscribe(
      response => {
          this.successMessage = this.translate.instant('Message_succès');
          this.contactForm.reset();
          // this.selectedFiles = null;
        },
        error => {
          this.errorMessage = this.translate.instant('Message_erreur');
        }
      );
  }

  

  
}
