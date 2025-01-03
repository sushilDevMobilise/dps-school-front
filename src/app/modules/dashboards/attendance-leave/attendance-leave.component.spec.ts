import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceLeaveComponent } from './attendance-leave.component';

describe('AttendanceLeaveComponent', () => {
  let component: AttendanceLeaveComponent;
  let fixture: ComponentFixture<AttendanceLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttendanceLeaveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttendanceLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
