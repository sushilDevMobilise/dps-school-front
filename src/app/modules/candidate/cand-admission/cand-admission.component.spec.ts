import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandAdmissionComponent } from './cand-admission.component';

describe('CandAdmissionComponent', () => {
  let component: CandAdmissionComponent;
  let fixture: ComponentFixture<CandAdmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandAdmissionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CandAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
