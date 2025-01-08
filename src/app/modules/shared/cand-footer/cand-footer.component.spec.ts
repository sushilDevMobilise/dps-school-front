import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandFooterComponent } from './cand-footer.component';

describe('CandFooterComponent', () => {
  let component: CandFooterComponent;
  let fixture: ComponentFixture<CandFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CandFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
