import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandResultComponent } from './cand-result.component';

describe('CandResultComponent', () => {
  let component: CandResultComponent;
  let fixture: ComponentFixture<CandResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CandResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
