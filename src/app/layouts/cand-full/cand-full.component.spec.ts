import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandFullComponent } from './cand-full.component';

describe('CandFullComponent', () => {
  let component: CandFullComponent;
  let fixture: ComponentFixture<CandFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandFullComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CandFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
