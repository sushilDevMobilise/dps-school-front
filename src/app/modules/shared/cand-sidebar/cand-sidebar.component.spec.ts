import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandSidebarComponent } from './cand-sidebar.component';

describe('CandSidebarComponent', () => {
  let component: CandSidebarComponent;
  let fixture: ComponentFixture<CandSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CandSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
