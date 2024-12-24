import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-notice-dashboard',
  templateUrl: './notice-dashboard.component.html',
  styleUrl: './notice-dashboard.component.css'
})
export class NoticeDashboardComponent {
  showCardField: boolean = false;

  ngOnInit(): void {
      
  }
  
  showCardForm(): void {
    this.showCardField = !this.showCardField;
  }
}
