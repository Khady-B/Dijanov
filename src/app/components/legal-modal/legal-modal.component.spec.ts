import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalModalComponent } from './legal-modal.component';

describe('LegalModalComponent', () => {
  let component: LegalModalComponent;
  let fixture: ComponentFixture<LegalModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LegalModalComponent]
    });
    fixture = TestBed.createComponent(LegalModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
