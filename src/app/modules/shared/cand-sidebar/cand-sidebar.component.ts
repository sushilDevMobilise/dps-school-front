import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-cand-sidebar',
  standalone: true,
  imports: [RouterModule], // Add RouterModule here
  templateUrl: './cand-sidebar.component.html',
  styleUrls: ['./cand-sidebar.component.css']
})
export class CandSidebarComponent {
  // menuArr: any = [
  //   {
  //     id: 1,
  //     menu_desc: "Dashboard",
  //     icon: "assets/img/radix-icons_dashboard.svg",
  //     link: "/dashboard"
  //   },
  //   {
  //     id: 2,
  //     menu_desc: "Notice Board",
  //     icon: "assets/img/noti.svg",
  //     link: "/notice"
  //   },
  //   {
  //     id: 3,
  //     menu_desc: "Assignment",
  //     icon: "assets/img/assig.svg",
  //     link: "/assignment"
  //   },
  //   {
  //     id: 4,
  //     menu_desc: "Fee",
  //     icon: "assets/img/noti.svg",
  //     link: "/fee"
  //   },
  //   {
  //     id: 5,
  //     menu_desc: "Report Card",
  //     icon: "assets/img/noti.svg",
  //     link: "/report-card"
  //   }
  // ];
}
