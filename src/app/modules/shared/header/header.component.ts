import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  menuArr : any = [
    {
      id : 1,
      menu_desc : "Dashboard",
      icon : "assets/img/radix-icons_dashboard.svg",
      link : "/dashboard"
    },
    {
      id : 2,
      menu_desc : "Notice Board",
      icon : "assets/img/noti.svg",
      link : "/notice"
    },
    {
      id : 3,
      menu_desc : "Assignment",
      icon : "assets/img/assig.svg",
      link : "/assignment"
    },
    {
      id : 4,
      menu_desc : "Fee",
      icon : "assets/img/noti.svg",
      link : "/fee"
    },
    {
      id : 5,
      menu_desc : "Report Card",
      icon : "assets/img/noti.svg",
      link : "/report-card"
    },
    {
      id : 6,
      menu_desc : "Certificate",
      icon : "assets/img/noti.svg",
      link : "/certificate"
    },
    {
      id : 7,
      menu_desc : "Event",
      icon : "assets/img/noti.svg",
      link : "/event"
    },
    {
      id : 8,
      menu_desc : "Important Contact",
      icon : "assets/img/noti.svg",
      link : "/important-contact"
    },
    {
      id : 9,
      menu_desc : "Query",
      icon : "assets/img/noti.svg",
      link : "/query"
    },
    {
      id : 10,
      menu_desc : "Library",
      icon : "assets/img/noti.svg",
      link : "/library"
    },
    {
      id : 11,
      menu_desc : "Time-Table",
      icon : "assets/img/noti.svg",
      link : "/time-table"
    },
    {
      id : 12,
      menu_desc : "Holiday List",
      icon : "assets/img/noti.svg",
      link : "/holiday"
    },
    {
      id : 13,
      menu_desc : "Important Links",
      icon : "assets/img/noti.svg",
      link : "/important-links"
    },
    {
      id : 14,
      menu_desc : "Attendance & Leave",
      icon : "assets/img/noti.svg",
      link : "/attendance-leave"
    },
    {
      id : 15,
      menu_desc : "Daily Task",
      icon : "assets/img/noti.svg",
      link : "/daily-task"
    },
    {
      id : 16,
      menu_desc : "Photo Gallery",
      icon : "assets/img/noti.svg",
      link : "/photo-gallery"
    },
    
  ];
}
