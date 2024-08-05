import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      lastName: ['', [Validators.required, Validators.maxLength(255)]],
      firstName: ['', [Validators.required, Validators.maxLength(255)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(255)]],
      tel: [''],
      service: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = {
        lastName: this.contactForm.value.lastName,
        firstName: this.contactForm.value.firstName,
        email: this.contactForm.value.email,
        tel: this.contactForm.value.tel,
        service: this.contactForm.value.service,
        message: this.contactForm.value.message,
        _subject: '[Dijanov] ' + this.contactForm.value.service // Ajout du sujet ici
      };
      this.contactService.sendContactForm(this.contactForm.value).subscribe(
        response => {
          this.successMessage = 'Votre message a été envoyé avec succès.';
          this.contactForm.reset();
        },
        error => {
          this.errorMessage = 'Une erreur s\'est produite. Veuillez réessayer plus tard.';
        }
      );
    }
  }
}
