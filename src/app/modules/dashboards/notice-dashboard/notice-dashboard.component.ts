import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-notice-dashboard',
  templateUrl: './notice-dashboard.component.html',
  styleUrl: './notice-dashboard.component.css'
})
export class NoticeDashboardComponent {
  showCardField: boolean = false;
  isRotated = false; // Initially, image is not rotated

  
  ngOnInit(): void {
      
  }
  
  // showCardForm(): void {
  //   this.showCardField = !this.showCardField;
  // }
  toggleImageRotation(): void {
    this.isRotated = !this.isRotated; // Toggle rotation state
    this.showCardField = !this.showCardField;
  }
  
}
