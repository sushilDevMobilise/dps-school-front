import { Component } from '@angular/core';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrl: './query.component.css'
})
export class QueryComponent {
  showCardField: boolean = false;
  isRotated = false; // Initially, image is not rotated

  
  ngOnInit(): void {
}
toggleImageRotation(): void {
  this.isRotated = !this.isRotated; // Toggle rotation state
  this.showCardField = !this.showCardField;
}

}