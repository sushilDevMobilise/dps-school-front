// import { Component, OnInit } from '@angular/core';
// import { Chart, registerables} from 'chart.js';
// Chart.register(...registerables);
// @Component({
//   selector: 'app-stud-dashboard',
//   templateUrl: './stud-dashboard.component.html',
//   styleUrl: './stud-dashboard.component.css'
// })
// export class StudDashboardComponent {
//   const ctx = document.getElementById('attendanceChart').getContext('2d');

//   new Chart(ctx, {
//     type: 'doughnut', 
//     data: {
//       labels: ['Present', 'Half Day', 'Absent'], 
//       datasets: [{
//         data: [25, 4, 8], 
//         backgroundColor: ['#28a745', '#007bff', '#dc3545'], 
//         borderWidth: 2, 
//       }]
//     },
//     options: {
//       plugins: {
//         legend: {
//           position: 'bottom', 
//           labels: {
//             font: {
//               size: 14 
//             }
//           }
//         }
//       },
//       cutout: '70%', 
//       responsive: true, 
//       maintainAspectRatio: false 
//     }
//   });
// }
import { Component, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-stud-dashboard',
  templateUrl: './stud-dashboard.component.html',
  styleUrls: ['./stud-dashboard.component.css']
})
export class StudDashboardComponent implements AfterViewInit {

  constructor() {}

  ngAfterViewInit(): void {
    const ctx = document.getElementById('attendanceChart') as HTMLCanvasElement;

    if (ctx) {
      new Chart(ctx.getContext('2d')!, {
        type: 'doughnut',
        data: {
          labels: ['Present', 'Half Day', 'Absent'],
          datasets: [{
            data: [25, 4, 8],
            backgroundColor: ['#28a745', '#007bff', '#dc3545'],
            borderWidth: 2,
          }]
        },
        options: {
          plugins: {
            legend: {
              position: 'right', // Place labels on the right
              labels: {
                font: {
                  size: 14
                }
              }
            }
          },
          cutout: '70%',
          responsive: true,
          maintainAspectRatio: false
        }
      });
    } else {
      console.error('Canvas element not found');
    }
  }
}
