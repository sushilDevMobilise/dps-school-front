import { Component } from '@angular/core';
import { SidebarComponent } from "../../modules/shared/sidebar/sidebar.component";
import { HeaderComponent } from "../../modules/shared/header/header.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../modules/shared/footer/footer.component";

@Component({
  selector: 'app-full',
  standalone: true,
  imports: [SidebarComponent, HeaderComponent, RouterOutlet, FooterComponent],
  templateUrl: './full.component.html',
  styleUrl: './full.component.css'
})
export class FullComponent {

}

// const ctx = document.getElementById('attendanceChart').getContext('2d');

// new Chart(ctx, {
//   type: 'doughnut', 
//   data: {
//     labels: ['Present', 'Half Day', 'Absent'], 
//     datasets: [{
//       data: [25, 4, 8], 
//       backgroundColor: ['#28a745', '#007bff', '#dc3545'], 
//       borderWidth: 2, 
//     }]
//   },
//   options: {
//     plugins: {
//       legend: {
//         position: 'bottom', 
//         labels: {
//           font: {
//             size: 14 
//           }
//         }
//       }
//     },
//     cutout: '70%', 
//     responsive: true, 
//     maintainAspectRatio: false 
//   }
// });
