import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-fee',
  templateUrl: './fee.component.html',
  styleUrls: ['./fee.component.css'] // Correct syntax for styleUrls
})
export class FeeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.renderChart();
  }

  renderChart() {
    const ctx = document.getElementById('feeChart') as HTMLCanvasElement;

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Paid  50300', 'Due  13000', 'Balance  10000'],
        datasets: [
          {
            data: [50330, 13000, 10000], // Values for Paid, Due, and Balance
            backgroundColor: ['#34A866', '#DA2020', '#199CDA'], // Colors for each section
            hoverBackgroundColor: ['#34A866', '#DA2020', '#199CDA']
          }
        ]
      },
      options: {
        responsive: true,
        cutout: '55%', // Makes the donut thinner
        plugins: {
          legend: {
            position: 'right',
            labels: {
              usePointStyle: true
            }
          }
        }
      }
    });
  }
}
