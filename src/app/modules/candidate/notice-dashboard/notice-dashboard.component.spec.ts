import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeDashboardComponent } from './notice-dashboard.component';

describe('NoticeDashboardComponent', () => {
  let component: NoticeDashboardComponent;
  let fixture: ComponentFixture<NoticeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticeDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoticeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
