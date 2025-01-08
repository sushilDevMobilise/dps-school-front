import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandLoginComponent } from './cand-login.component';

describe('CandLoginComponent', () => {
  let component: CandLoginComponent;
  let fixture: ComponentFixture<CandLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CandLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
