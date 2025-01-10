import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandPaymentReceiptComponent } from './cand-payment-receipt.component';

describe('CandPaymentReceiptComponent', () => {
  let component: CandPaymentReceiptComponent;
  let fixture: ComponentFixture<CandPaymentReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandPaymentReceiptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CandPaymentReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
